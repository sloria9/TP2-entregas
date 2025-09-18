/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en numero.
 * 
 * 
 * Recibe un texto y una secuencia de caracteres que usará como separador.
 * Devuelve un array con todos los números producto de partir el texto cada vez que aparezca la secuencia separadora.
 * En el caso de que alguna de las partes no sea numérica, no se incluirá en el resultado, pero no debe lanzar ningún error.
 * @param {string} str 
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
export function transformarStringEnArrayDeNumeros(str, separador) {
      return str
    .split(separador)              // divide el string en el separador
    .map(parte => Number(parte))   // 'castea' cada parte en número (NaN si no se puede)
    .filter(num => !isNaN(num))   // descarta los NaN (func que detecta si son numero)
}

/**
 * concatena todos los numeros entre sí, intercalando un separador entre número y número.
 * @param {number[]} arr 
 * @param {string} separador 
 * @returns {string} el nuevo string
 */
export function transformarArrayDeNumerosAUnSoloString(arr, separador) {
    return arr
    .join(separador) // join does the reverse to split, it creates a string of arr items joined by separator between them.
}

