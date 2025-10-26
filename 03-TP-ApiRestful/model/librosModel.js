class ModelLibros{

    #libros = []

    constructor(){
        this.#libros =
            { id: '1', titulo: 'Los 7 maridos de Evelyn Hugo', autor: 'Taylor Jenkins Reid', anio: 2017 },
            { id: '2', titulo: 'I`m glad my mom died', autor: 'Jennette McCurdy', anio: 2022 },
            { id: '3', titulo: 'Outliers: The Story of Success', autor: 'Malcolm Gladwell', anio: 2008 },
            { id: '4', titulo: '1984', autor: 'George Orwell', anio: 1949 }
    }

    obtenerLibros = (id) => {
        if (id) {
            return this.#libros.find(libro => libro.id === id);
        }
        return this.#libros;
    };

    guardarLibro = (libro) => {
        libro.id = String(parseInt(this.#libros[this.#libros.length - 1]?.id || 0) + 1);
        this.#libros.push(libro);
        return libro;
    };

    actualizarLibro = (id, libroActualizado) => {
        const index = this.#libros.findIndex(libro => libro.id === id);
        if (index !== -1) {
            const libroAnterior = this.#libros[index];
            const libroNuevo = { ...libroAnterior, ...libroActualizado };
            this.#libros[index] = libroNuevo;
            return libroNuevo;
        }
        return null;
    };

    borrarLibro = (id) => {
        const index = this.#libros.findIndex(libro => libro.id === id);
        if (index !== -1) {
            const libroBorrado = this.#libros.splice(index, 1)[0];
            return libroBorrado;
        }
        return null;
    };
}
export default new ModelLibros()