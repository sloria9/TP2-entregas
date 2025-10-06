//modo sincrónico
import fs from 'fs'

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
    4) Incluya el manejo de errores.
 */

const ruta = './package.json'

const dataString = fs.readFileSync(ruta, 'utf8');
const dataObj = JSON.parse(dataString)
const { size } = fs.statSync('./package.json');

let info = { dataString, dataObj, size };

console.log(info)