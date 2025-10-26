class ModelLibros {
    #libros = [];

    constructor() {
        this.#libros = [
            { id: '1', titulo: 'Los 7 maridos de Evelyn Hugo', autor: 'Taylor Jenkins Reid', anio: 2017 },
            { id: '2', titulo: 'I`m glad my mom died', autor: 'Jennette McCurdy', anio: 2022 },
            { id: '3', titulo: 'Outliers: The Story of Success', autor: 'Malcolm Gladwell', anio: 2008 },
            { id: '4', titulo: '1984', autor: 'George Orwell', anio: 1949 }
        ];
    }

    async getAll() {
        return this.#libros;
    }

    async getById(id) {
        return this.#libros.find(libro => libro.id === id);
    }

    async create(libro) {
        libro.id = String(parseInt(this.#libros.at(-1)?.id || 0) + 1);
        this.#libros.push(libro);
        return libro;
    }

    async update(id, libroActualizado) {
        const index = this.#libros.findIndex(l => l.id === id);
        if (index === -1) return null;

        const libroAnterior = this.#libros[index];
        const libroNuevo = { ...libroAnterior, ...libroActualizado };
        this.#libros[index] = libroNuevo;
        return libroNuevo;
    }

    async remove(id) {
        const index = this.#libros.findIndex(libro => libro.id === id);
        if (index === -1) return null;
        
        const libroBorrado = this.#libros.splice(index, 1)[0];
        return libroBorrado;
    }
}

export default new ModelLibros();