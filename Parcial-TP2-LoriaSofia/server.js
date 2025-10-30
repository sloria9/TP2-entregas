import express from 'express'
import RouterNumeros from './router/numero.js';

class Server {
    #port = null
    #routerNumeros = null

    constructor(port) {
        this.#port = port
        this.#routerNumeros = new RouterNumeros().config()
    }

    start() {
        const app = express()
        app.use(express.json())
        app.use(express.urlencoded({extends: true}))

        // Servicio de recursos estáticos (recursos del frontend)
        app.use(express.static('public'))

        /* ----------------------------------- */
        /*        API RESTful: numeros       */
        /* ----------------------------------- */
        app.use('/numeros', this.#routerNumeros)

        const server = app.listen(this.#port, () => console.log(`Servidor express escuchando en http://localhost:${this.#port}`))
        server.on('error', error => console.log(`Error en servidor: ${error.message}`))
    }
}

export default Server