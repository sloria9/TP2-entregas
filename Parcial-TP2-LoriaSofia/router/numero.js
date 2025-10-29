import express from 'express'

import Controller from '../controller/numeroController.js'

class Router {

    constructor() {
        this.controlador = new Controller()
    }

    config() {
        const router = express.Router()

        router.post('/entrada', ctrl.postEntrada);
        router.get('/entrada', ctrl.getEntrada);
        router.get('/promedio', ctrl.getPromedio);
        router.get('/minmax', ctrl.getMinMax);
        router.get('/cantidad', ctrl.getCantidad);

        return router
    }
}

export default Router
