import fs from 'fs';


/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
export function leerArchivoComoString(ruta) {
    return fs.readFileSync(ruta, 'utf-8'); 
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe.
 * sino, lanza error.
 * flag en true, crea el archivo y lo escribe.
 * flag en false, lanza el error “el archivo no existe”.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 */
export function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {

  try {
    if (fs.existsSync(ruta)) { //valida si existe un archivo en esa ruta exacta
      // El archivo ya existe escribo
      console.log('Contenido actual:', fs.readFileSync(ruta, 'utf-8'))
      console.log('Escribiendo archivo..')
      fs.writeFileSync(ruta, texto, "utf-8");

      console.log(`Archivo sobrescrito en: ${ruta}`);
      console.log('Contenido actualizado:', fs.readFileSync(ruta, 'utf-8'))
    } else if(shouldCreateIfNotExists) {
      //si el archivo no existe
        console.log(`Debi crear archivo en la ruta: ${ruta}`);
        fs.writeFileSync(ruta, texto, "utf-8"); // lo crea automáticamente
        console.log(`Archivo creado en: ${ruta}`);
    } else {
        throw new Error("El archivo no existe.")
    }
  } catch (error) {
    console.error("Error al escribir el archivo:", error.message);
  }
}

// exportar ambas funciones
