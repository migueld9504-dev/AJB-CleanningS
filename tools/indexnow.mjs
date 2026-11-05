/**
 * Avisa a Bing y a los demas buscadores de IndexNow de todas las URLs del sitemap.
 * Correr SOLO despues de publicar: comprueba primero que el sitio nuevo este en linea.
 *
 *   node tools/indexnow.mjs
 */
import { readFileSync, readdirSync } from 'fs';

const HOST = 'ajbcleaningservices.com';
const keyFile = readdirSync('public').find(f => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error('Falta la clave en public/<clave>.txt');
const key = keyFile.replace('.txt', '');

const live = await fetch(`https://${HOST}/${keyFile}`);
if (!live.ok || (await live.text()).trim() !== key) {
  console.error(`La clave no esta publicada en https://${HOST}/${keyFile}. Publica el sitio y vuelve a correr esto.`);
  process.exit(1);
}

const urlList = [...readFileSync('public/sitemap.xml', 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList })
});
console.log(`${urlList.length} URLs enviadas -> HTTP ${res.status} (200 o 202 = aceptado)`);
