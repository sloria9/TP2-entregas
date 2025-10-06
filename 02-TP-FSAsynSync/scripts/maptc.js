//modo asincrónico con promises (sintaxis then catch).
import { readFile, writeFile, stat } from 'node:fs/promises';

/**
 * 1) Lea el archivo package.json y declare un objeto con el siguiente formato y datos:
    let info = {
        contenidoStr: (contenido del archivo leído en formato string),
        contenidoObj: (contenido del archivo leído en formato objeto),
        size: (tamaño en bytes del archivo)
    }
    2) Muestre por consola el objeto info luego de leer el archivo.
    3) Guarde el objeto info en un archivo llamado info.txt
        dentro de la misma carpeta de package.json.
    4) Incluiya el manejo de errores.
 */

const ruta = './package.json'
const outFile = './info.txt'

readFile(ruta, 'utf8')
  .then((contenidoStr) => {
    let contenidoObj = JSON.parse(contenidoStr);
    return Promise.all([Promise.resolve(contenidoStr), Promise.resolve(contenidoObj), stat(ruta)]);
  })
  .then(([contenidoStr, contenidoObj, stats]) => {
    const info = { contenidoStr, contenidoObj, size: stats.size };
    console.log(info);
    const infoStr = JSON.stringify(info, null, '\t');
    return writeFile(outFile, infoStr, 'utf8');
  })
  .catch((err) => {
    console.error('Error:', err.message);
  });