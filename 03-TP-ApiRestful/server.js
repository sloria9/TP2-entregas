import express from 'express'
import router from './router/libros.js';

const app = express()
app.use(express.json())
app.use(express.urlencoded({extends: true}))

//servicio de recursos estaticos
app.use(express.static('public'))


/* ----------------------------------- */
/*        API RESTful: libros.         */
/* ----------------------------------- */
app.use('/api/libros', router)
const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))

