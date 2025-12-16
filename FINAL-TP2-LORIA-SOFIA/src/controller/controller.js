import * as service from '../service/service.js';

export const recibirLectura = async (req, res) => {
    try {
        const lectura = req.body;
        const resultado = await service.procesarLectura(lectura);
        
        res.status(200).json(resultado);
    } catch (error) {
        res.status(400).json({ errorMsg: error.message });
    }
};

export const listarSensores = (req, res) => {
    try {
        const sensores = service.obtenerSensores();
        res.status(200).json(sensores);
    } catch (error) {
        res.status(500).json({ errorMsg: error.message });
    }
};

export const listarAlertas = (req, res) => {
    try {
        const alertas = service.obtenerAlertas();
        res.status(200).json(alertas);
    } catch (error) {
        res.status(500).json({ errorMsg: error.message });
    }
};
