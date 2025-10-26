class ModelLibros{

    #libros = []

    constructor(){
        this.#libros =
            { id: '1', titulo: 'Los 7 maridos de Evelyn Hugo', autor: 'Taylor Jenkins Reid', anio: 2017 },
            { id: '2', titulo: 'I`m glad my mom died', autor: 'Jennette McCurdy', anio: 2022 },
            { id: '3', titulo: 'Outliers: The Story of Success', autor: 'Malcolm Gladwell', anio: 2008 },
            { id: '4', titulo: '1984', autor: 'George Orwell', anio: 1949 }
    }

    obtenerLibros = async () => this.#libros

    obtenerLibro = async id => {
      const libro = this.#libros.find(l => l.id == id)
      return libro || {}
    }

    guardarLibro = async libro => {
      libro.id = String(parseInt(this.#libros[this.#libros.length-1]?.id || 0) + 1)
      this.#libros.push(libro)
      return libro
    }


    actualizarLibro = async (id, libro) => {
    libro.id = id

    const index = this.#libros.findIndex(l => l.id == id)
    const libroAnt = this.#libros[index]
    const libroActual = {...libroAnt, ...libro}

    this.#libros.splice(index,1,libroActual)

    return libroActual
    }

    borrarLibro = async id => {
        const index = this.#libros.findIndex(libro => libro.id == id)
        const libro = this.#libros.splice(index,1)[0]
        return libro
    }
}
export default ModelLibros