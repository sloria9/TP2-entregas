import { combinarDosArrays, combinarNArrays } from "../src/apareo.js";
import { leerArchivoComoString, escribirTextoEnArchivo } from "../src/utils/fileUtils.js";
import { transformarStringEnArrayDeNumeros, transformarArrayDeNumerosAUnSoloString } from "../src/utils/transformUtils.js";


// leo los 4 archivos a memoria

// preparo los 4 arrays a partir de los archivo leidos

// combino los primeros dos arrays

// combino los cuatro arrays


console.log('----INICIO LECTURA----');

const rutaSetA = './in/10NumerosOrdenadosEntre1y50(setA).in'
const rutaSetB = './in/10NumerosOrdenadosEntre1y50(setB).in'
const rutaImpares = './in/imparesOrdenadosEntre1y999.in'
const rutaPares = './in/paresOrdenadosEntre2y1000.in'

//lectura del archivo //utf-8 es el formato de codificacion del archivo
console.log('\n[LECTURA]');
const setATxt       = leerArchivoComoString(rutaSetA);
const setBTxt       = leerArchivoComoString(rutaSetB);
const imparesTxt    = leerArchivoComoString(rutaImpares);
const paresTxt      = leerArchivoComoString(rutaPares);

console.log('---FIN LECTURA----');

//pruebo conversion de texto a array
console.log('\n[PRUEBA] transformarStringEnArrayDeNumeros(imparesTxt)')

const setA    = transformarStringEnArrayDeNumeros(setATxt, ',')
const setB    = transformarStringEnArrayDeNumeros(setBTxt, ',')
const impares = transformarStringEnArrayDeNumeros(imparesTxt, ',')
const pares   = transformarStringEnArrayDeNumeros(paresTxt, ',')

//falta output
console.log('Resultado:', impares)

console.log('\n--------');

//pruebo apareo
console.log('\n[PRUEBA] combinarDosArrays(setA, setB)')

const apareoPrueba = combinarDosArrays(setA, setB)
console.log('Resultado:', apareoPrueba)

console.log('\n--------');

//combinarNArrays con los 4
console.log('\n[PRUEBA] combinarNArrays([A, B, impares, pares])');

const apareoTodos = combinarNArrays([setA, setB, impares, pares]);
console.log('Resultado:', apareoTodos);

console.log('\n--------');

//escribirTextoEnArchivo
console.log('\n[PRUEBA] escribirTextoEnArchivo([A, B, impares, pares])');

// 5) Escribir resultados en ./out (crear si no existe o sobrescribir si existe)
const outApareoPrueba  = './out/resultado_apareoPrueba.in';
const outApareoTodos = './out/combinado.out';

escribirTextoEnArchivo(outApareoPrueba,  transformarArrayDeNumerosAUnSoloString(apareoPrueba, ','), true)
escribirTextoEnArchivo(outApareoTodos, transformarArrayDeNumerosAUnSoloString(apareoTodos, ','), true)

const outError = './out/no_crear_este_archivo.out';
escribirTextoEnArchivo(outError,'esto no debería crearse', false)

console.log('--- FIN PRUEBAS ---');
