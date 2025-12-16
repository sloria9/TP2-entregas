import sensoresMem from './sensorMem.js';

class SensorFactory {
    static get(modo = 'MEM') {
        switch (modo) {
            case 'MEM':
                return sensoresMem;
            default:
                throw new Error(`Modo de persistencia ${modo} no soportado para sensores`);
        }
    }
}

export default SensorFactory;
