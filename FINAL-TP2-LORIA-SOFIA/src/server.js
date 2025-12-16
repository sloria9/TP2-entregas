import express from 'express';
import router from './router/routerSensor.js';

class Server {
    constructor(port = 8080) {
        this.port = port;
        this.app = express();
        this.server = null;
        this.configure();
    }

    configure() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use('/', router);
    }

    start() {
        if (this.server) {
            return this.server;
        }

        this.server = this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en puerto ${this.port}`);
        });

        this.server.on('error', error => {
            console.log(`Error en servidor: ${error.message}`);
        });

        return this.server;
    }

    stop() {
        if (this.server) {
            this.server.close();
            this.server = null;
        }
    }
}

export default Server;
