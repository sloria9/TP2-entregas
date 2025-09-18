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
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 */
export function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
}

// exportar ambas funciones
