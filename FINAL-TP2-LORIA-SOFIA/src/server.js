import express from 'express';
import router from './router/routerSensor.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});

server.on('error', error => console.log(`Error en servidor: ${error.message}`));