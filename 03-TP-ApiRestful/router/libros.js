import express from 'express';
import controlador from '../controlador/libros.js';

const router = express.Router();

// GET /libros o /libros/:id
router.get('/:id?', controlador.obtenerLibros);

// POST /libros
router.post('/', controlador.guardarLibro);

// PUT /libros/:id
router.put('/:id', controlador.actualizarLibro);

// DELETE /libros/:id
router.delete('/:id', controlador.borrarLibro);

export default router;