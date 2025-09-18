
/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
export function combinarDosArrays(arrA, arrB) {

    let indexA = 0
    let indexB = 0
    const apareada = [] //guarda resultado final

  while (indexA < arrA.length && indexB < arrB.length) { //itero mientras haya contenido
    const a = arrA[indexA];
    const b = arrB[indexB];

    if (a < b) {
      apareada.push(a)
      indexA++;
    } else if (a > b) {
      apareada.push(b)
      indexB++;
    } else { //si son iguales pusheo cualquiera pero me quedo con uno
        apareada.push(a)
        indexA++;
        indexB++;
    }
  }

  // agregar todo lo que quede de alguno de los arrays directamente
  while (indexA < arrA.length) {
    apareada.push(arrA[indexA]);
    indexA++;
  }
  while (indexB < arrB.length) {
    apareada.push(arrB[indexB]);
    indexB++;
  }

  return apareada;

}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {nuber[]} el nuevo array de números ordenados
 */
export function combinarNArrays(arrs) {
      if (arrs.length === 0) return [];
  if (arrs.length === 1) return arrs[0];

  // reduce arranca con el primer array como acumulador
  return arrs.reduce((acc, current) => { //We use reduce when we need to iterate over an array
    return combinarDosArrays(acc, current);
  });
}

// exportar ambas funciones

