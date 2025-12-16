import sensoresMem from '../model/DAO/sensorMem.js';
import alertasMem from '../model/DAO/alertaMem.js';
import { validarLectura } from './validaciones/validations.js';

const verificarAlertas = (lectura) => {
    let mensajeAlerta = null;

    if (lectura.tipo === 'TEMPERATURA' && lectura.valor > 35) {
        mensajeAlerta = "Temperatura excede 35 grados";
    } else if (lectura.tipo === 'HUMEDAD' && lectura.valor < 20) {
        mensajeAlerta = "Humedad por debajo de 20%";
    } else if (lectura.tipo === 'CO2' && lectura.valor > 1000) {
        mensajeAlerta = "Nivel de CO2 peligroso";
    }

    if (mensajeAlerta) {
        const nuevaAlerta = {
            sensorId: lectura.id,
            tipo: lectura.tipo,
            valor: lectura.valor,
            mensaje: mensajeAlerta,
            fecha: new Date().toISOString()
        };
        alertasMem.saveAlerta(nuevaAlerta);
        console.log("ALERTA GENERADA:", nuevaAlerta);
    }
};

export const procesarLectura = async (lectura) => {
    validarLectura(lectura);

    const accion = sensoresMem.saveSensor(lectura);

    verificarAlertas(lectura);

    return { 
        status: "ok", 
        accion: accion, 
        sensor: lectura 
    };
};