import express from 'express';
import controlador from '../controller/librosController.js';

const router = express.Router();

// GET /libros o /libros/:id
router.get('/:id', controlador.getById);

router.get('/', controlador.getAll);

// POST /libros
router.post('/', controlador.create);

// PUT /libros/:id
router.put('/:id', controlador.update);

// DELETE /libros/:id (borrar)
router.delete('/:id', controlador.remove);

export default router;