const TIPOS_VALIDOS = ['TEMPERATURA', 'HUMEDAD', 'CO2'];

export const validarLectura = (dato) => {
    if (!dato.id || typeof dato.id !== 'string' || dato.id.length !== 8) {
        throw new Error("El ID debe ser un string de 8 caracteres.");
    }

    if (!dato.tipo || !TIPOS_VALIDOS.includes(dato.tipo)) {
        throw new Error(`El tipo debe ser uno de: ${TIPOS_VALIDOS.join(', ')}`);
    }

    if (dato.valor === undefined || typeof dato.valor !== 'number') {
        throw new Error("El valor debe ser numérico.");
    }

    if (!dato.timestamp) {
        throw new Error("Debe incluir un timestamp.");
    }

    return true;
};