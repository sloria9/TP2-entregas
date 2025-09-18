import { combinarDosArrays, combinarNArrays } from "../src/apareo.js";
import { leerArchivoComoString, escribirTextoEnArchivo } from "../src/utils/fileUtils.js";
import { transformarStringEnArrayDeNumeros, transformarArrayDeNumerosAUnSoloString } from "../src/utils/transformUtils.js";


// leo los 4 archivos a memoria

// preparo los 4 arrays a partir de los archivo leidos

// combino los primeros dos arrays

// combino los cuatro arrays


console.log('----INICIO----');

const rutaSetA = './in/10NumerosOrdenadosEntre1y50(setA).in'
const rutaSetB = './in/10NumerosOrdenadosEntre1y50(setB).in'
const rutaImpares = './in/imparesOrdenadosEntre1y999.in'
const rutaPares = './in/paresOrdenadosEntre2y1000.in'

//lectura del archivo //utf-8 es el formato de codificacion del archivo
const setA = leerArchivoComoString(rutaSetA); 
console.log('10NumerosOrdenadosEntre1y50(setA):', setA);

console.log('--------');

const setB = leerArchivoComoString(rutaSetB); 
console.log('10NumerosOrdenadosEntre1y50(setB):', setB);

console.log('--------');

const impares1y999 = leerArchivoComoString(rutaImpares); 
console.log('imparesOrdenadosEntre1y999:', impares1y999);

console.log('--------');

const pares2y1000 = leerArchivoComoString(rutaPares); 
console.log('paresOrdenadosEntre2y1000:', pares2y1000);

console.log('---FIN-----');

//la carpeta in tiene listas de numeros para generar las entradas
//lee los archivos in y deben escupir lo que sale en out