/**
 * Genera public/sitemap.xml (y la copia espejo de la raiz) leyendo el canonical y los
 * hreflang que cada pagina ya declara.
 *
 *   node tools/build-sitemap.mjs
 *
 * Al leerlo de las propias paginas, el sitemap no puede contradecirlas: si una pagina
 * tiene mal el hreflang, el error sale aqui en vez de quedarse escondido.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { execSync } from 'child_process';

const SITE = 'https://ajbcleaningservices.com/';
const EXCLUDE = new Set(['gallery-manager.html', 'google79c9e6f00b6af792.html', '404.html']);

const files = [
  ...readdirSync('.').filter(f => f.endsWith('.html') && !EXCLUDE.has(f)),
  ...(existsSync('es') ? readdirSync('es').filter(f => f.endsWith('.html')).map(f => 'es/' + f) : [])
];

const today = new Date().toISOString().slice(0, 10);

// lastmod real: Google deja de creerle a un sitemap que marca todo como cambiado hoy
const dirty = new Set(execSync('git status --porcelain', { encoding: 'utf8' }).split('\n').map(l => l.slice(3).trim().replace(/"/g, '')));
const lastCommit = {};
let current = '';
for (const line of execSync('git log --format=@%cs --name-only', { encoding: 'utf8', maxBuffer: 1 << 26 }).split('\n')) {
  if (line.startsWith('@')) current = line.slice(1);
  else if (line && !lastCommit[line]) lastCommit[line] = current;
}
const modified = (f) => (dirty.has(f) || !lastCommit[f]) ? today : lastCommit[f];
const entries = [];
const problems = [];

for (const f of files) {
  const html = readFileSync(f, 'utf8');
  const can = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (!can) { problems.push(`${f}: sin canonical`); continue; }
  const alts = [...html.matchAll(/<link rel="alternate" hreflang="([a-zA-Z-]+)" href="([^"]+)"/g)].map(m => [m[1], m[2]]);
  if (!alts.length) { problems.push(`${f}: sin hreflang`); continue; }
  if (!alts.some(a => a[1] === can[1])) problems.push(`${f}: el canonical no esta en su propio hreflang`);

  // prioridad: home 1.0, servicios y hub 0.8, ciudades 0.7
  const isHome = /^(index\.html|es\/index\.html)$/.test(f);
  const isCity = /commercial-cleaning-|limpieza-comercial-/.test(f) && !/ny-nj\.html$|oficinas-ny-nj\.html$/.test(f);
  const priority = isHome ? '1.0' : isCity ? '0.7' : '0.8';

  entries.push({ loc: can[1], alts, priority, lastmod: modified(f) });
}

entries.sort((a, b) => (b.priority.localeCompare(a.priority)) || a.loc.localeCompare(b.loc));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map(e => `  <url>
    <loc>${e.loc}</loc>
${e.alts.map(([lang, href]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />`).join('\n')}
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

writeFileSync('public/sitemap.xml', xml);
writeFileSync('sitemap.xml', xml);

console.log(`${entries.length} URLs en el sitemap`);
console.log(problems.length ? 'PROBLEMAS:\n  ' + problems.join('\n  ') : 'Sin problemas de canonical/hreflang');
