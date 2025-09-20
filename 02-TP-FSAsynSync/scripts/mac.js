//mac.js → modo asincrónico con callbacks
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
const outFile = './info.txt'
fs.readFile(ruta, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error al leer archivo:', err)
    return
  }

  fs.stat(ruta, (err, stats) => {
    if (err) {
      console.error('Error al obtener stats:', err)
      return
    }

    let info = {
      contenidoStr: data,
      contenidoObj: JSON.parse(data),
      size: stats.size
    }

    console.log(info)

    fs.writeFileSync(outFile, JSON.stringify(info, null, '\t'), "utf-8", (err) => {
        if (err) {
            console.error("Error al escribir archivo:", err);
            return
        }
        console.log(`Archivo creado en: ${outFile}`);
    })
  })
})