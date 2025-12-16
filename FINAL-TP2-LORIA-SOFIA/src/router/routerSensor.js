import express from 'express';
import * as controller from '../controller/controller.js';

const router = express.Router();

// Endpoint requerido: POST /lecturas y /sensores
router.post('/lecturas', controller.recibirLectura);
router.get('/sensores', controller.listarSensores);

//no requerido
router.get('/alertas', controller.listarAlertas);

export default router;
