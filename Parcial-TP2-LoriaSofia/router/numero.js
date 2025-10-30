import express from 'express'
import Controller from '../controller/numeroController.js'

class Router {

    constructor() {
        this.controlador = new Controller()
    }

    config() {
        const router = express.Router()

        router.post('/entrada', this.controlador.postEntrada);
        router.get('/entrada', this.controlador.getEntrada);
        router.get('/promedio', this.controlador.getPromedio);
        router.get('/minmax', this.controlador.getMinMax);
        router.get('/cantidad', this.controlador.getCantidad);

        return router
    }
}

export default Router
