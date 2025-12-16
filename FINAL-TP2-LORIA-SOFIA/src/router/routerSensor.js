import express from 'express';
import * as controller from '../controller/controller.js';

const router = express.Router();

// Endpoint requerido: POST /lecturas
router.post('/lecturas', controller.recibirLectura);

export default router;