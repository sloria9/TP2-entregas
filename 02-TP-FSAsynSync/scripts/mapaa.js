//modo asincrónico con promises (sintaxis async await).
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

async function ejecutar() {
  try {
    const contenidoStr = await readFile(ruta, 'utf8');
    const contenidoObj = JSON.parse(contenidoStr);
    const { size } = await stat(ruta);

    const info = { contenidoStr, contenidoObj, size };
    console.log(info);

    const infoStr = JSON.stringify(info, null, '\t');
    await writeFile(outFile, infoStr, 'utf8');

  } catch (err) {
    console.error('Error:', err.message);
  }
}

ejecutar();