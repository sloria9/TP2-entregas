import alertasMem from '../dao/persistencia/alertaMem.js';
import SensorFactory from '../dao/persistencia/sensorFactory.js';
import config from '../config.js';
import { validarLectura } from './validation/validations.js';

const sensoresDAO = SensorFactory.get(config.MODO_PERSISTENCIA);

const verificarAlertas = (lectura) => {
    let mensajeAlerta = null;

    if (lectura.tipo === 'TEMPERATURA' && lectura.valor > 35) {
        mensajeAlerta = "TEMPERATURA alta";
    } else if (lectura.tipo === 'HUMEDAD' && lectura.valor < 20) {
        mensajeAlerta = "HUMEDAD baja";
    } else if (lectura.tipo === 'CO2' && lectura.valor > 1000) {
        mensajeAlerta = "CO2 peligroso";
    }

    if (mensajeAlerta) {
        const nuevaAlerta = {
            id: lectura.id,
            tipo: lectura.tipo,
            valor: lectura.valor,
            timestamp: lectura.timestamp,
            alerta: mensajeAlerta,
        };
        alertasMem.saveAlerta(nuevaAlerta);
        console.log("ALERTA GENERADA:", nuevaAlerta);
    }

    return mensajeAlerta;
};

export const procesarLectura = async (lectura) => {
    validarLectura(lectura);

    sensoresDAO.saveSensor(lectura);

    const alerta = verificarAlertas(lectura);

    return {
        ...lectura,
        alerta: alerta ?? null,
    };
};

export const obtenerSensores = () => {
    return sensoresDAO.getAll();
};

export const obtenerAlertas = () => {
    return alertasMem.getAll();
};
