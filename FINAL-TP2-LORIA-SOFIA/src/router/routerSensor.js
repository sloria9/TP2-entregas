import express from 'express';
import * as controller from '../controller/controller.js';

const router = express.Router();

// Endpoint requerido: POST /lecturas
router.post('/lecturas', controller.recibirLectura);
router.get('/sensores', controller.listarSensores);
router.get('/alertas', controller.listarAlertas);

export default router;
