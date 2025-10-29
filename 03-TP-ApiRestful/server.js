import express from 'express'
import router from './router/libros.js';

class Server{

    constructor(port){
       this.port = port
    }


    start(){
    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({extends: true}))

    //servicio de recursos estaticos
    app.use(express.static('public'))


/* ----------------------------------- */
/*        API RESTful: libros.         */
/* ----------------------------------- */
app.use('/api/libros', router)
const server = app.listen(this.port, () => console.log(`Servidor express escuchando en http://localhost:${this.port}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))

}
}

export default Server
