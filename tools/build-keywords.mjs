/**
 * Genera la lista de palabras clave a vigilar, a partir de tools/cities.json
 *
 *   node tools/build-keywords.mjs
 *
 * Salida:
 *   tools/keywords.csv  -> para importar en SerpBear (o en cualquier rank tracker)
 *   tools/keywords.txt  -> agrupado por tanda, para pegar a mano en la interfaz
 *
 * Las tandas importan: los rastreadores SERP gratuitos tienen cupo diario, asi que
 * conviene empezar por la tanda 1 (area de Hartford, donde el negocio puede rankear
 * de verdad) y abrir las siguientes cuando haya cupo.
 */
import { readFileSync, writeFileSync } from 'fs';

const cities = JSON.parse(readFileSync('tools/cities.json', 'utf8'));

// Marca y terminos sin ciudad: lo primero que hay que poder medir
const BRAND = [
  ['AJB Cleaning Services', 'en', 1],
  ['AJB Cleaning Services Windsor CT', 'en', 1],
  ['commercial cleaning Windsor CT', 'en', 1],
  ['janitorial services Hartford County CT', 'en', 1],
  ['office cleaning Connecticut', 'en', 1],
  ['post construction cleaning Connecticut', 'en', 1],
  ['medical office cleaning Connecticut', 'en', 1],
  ['limpieza comercial Connecticut', 'es', 1],
  ['limpieza de oficinas Hartford CT', 'es', 1],
  ['servicio de limpieza comercial en Connecticut', 'es', 1]
];

// Plantillas: las de tanda 1 se aplican a las ciudades del area de Hartford,
// las de tanda 2 solo dejan una por idioma en las ciudades lejanas
const T1_EN = ['commercial cleaning {city} {st}', 'office cleaning {city} {st}', 'janitorial services {city} {st}'];
const T1_ES = ['limpieza comercial {city} {st}', 'limpieza de oficinas {city} {st}'];
const T2_EN = ['commercial cleaning {city} {st}'];
const T2_ES = ['limpieza comercial {city} {st}'];

const rows = [];
const push = (kw, lang, tanda, city, st) =>
  rows.push({ keyword: kw, lang, tanda, city: city || '', state: st || '' });

for (const [kw, lang, tanda] of BRAND) push(kw, lang, tanda, '', 'CT');

for (const c of cities) {
  const t1 = c.tier === 1;
  const en = t1 ? T1_EN : T2_EN;
  const es = t1 ? T1_ES : T2_ES;
  const tanda = t1 ? 2 : 3;
  for (const tpl of en) push(tpl.replace('{city}', c.city).replace('{st}', c.state), 'en', tanda, c.city, c.state);
  for (const tpl of es) push(tpl.replace('{city}', c.city).replace('{st}', c.state), 'es', tanda, c.city, c.state);
}

// CSV. device=desktop y mobile se añaden aparte en la herramienta: duplicar aqui
// gastaria el doble de cupo sin aportar nada al principio.
const csv = ['keyword,country,device,city,state,language,batch']
  .concat(rows.map(r => `"${r.keyword}",US,mobile,"${r.city}",${r.state},${r.lang},${r.tanda}`))
  .join('\n');
writeFileSync('tools/keywords.csv', csv + '\n');

const byBatch = {};
for (const r of rows) (byBatch[r.tanda] ||= []).push(r);
const labels = {
  1: 'TANDA 1 - marca y terminos generales (empezar por aqui, 10 palabras)',
  2: 'TANDA 2 - area de Hartford, donde el negocio puede rankear de verdad',
  3: 'TANDA 3 - ciudades lejanas (NY, NJ, PA, Stamford, New Haven): solo organico, sin bloque local'
};
const txt = Object.keys(byBatch).sort().map(b =>
  `### ${labels[b]}  (${byBatch[b].length} palabras)\n` +
  byBatch[b].map(r => r.keyword).join('\n')
).join('\n\n');
writeFileSync('tools/keywords.txt', txt + '\n');

console.log(`${rows.length} palabras clave`);
for (const b of Object.keys(byBatch).sort()) console.log(`  tanda ${b}: ${byBatch[b].length}`);
console.log('-> tools/keywords.csv y tools/keywords.txt');
