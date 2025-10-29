class NumerosMemDAO {
  #numeros = []

  constructor() {
    this.#numeros = []
  }

  obtenerNumeros = async () => {
    return this.#numeros
  }

  guardarNumero = async (data) => {
    const n = Number(data.numero ?? data)
    this.#numeros.push(n)
    return n
  }

  borrarNumeros = async () => {
    this.#numeros = []
    return { msg: 'Todos los números fueron eliminados' }
  }
}

export default NumerosMemDAO
