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