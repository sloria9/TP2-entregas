import fs from 'fs/promises'

class NumerosFileDAO {
  #ruta

  constructor() {
    this.#ruta = './data/numeros.json'
  }

  async #leer() {
    try {
      const data = await fs.readFile(this.#ruta, 'utf-8')
      return JSON.parse(data)
    } catch {
      return []
    }
  }

  async #escribir(datos) {
    await fs.writeFile(this.#ruta, JSON.stringify(datos, null, 2))
  }

  obtenerNumeros = async () => {
    return await this.#leer()
  }

  guardarNumero = async (data) => {
    const n = Number(data.numero ?? data)
    const numeros = await this.#leer()
    numeros.push(n)
    await this.#escribir(numeros)
    return n
  }

  borrarNumeros = async () => {
    await this.#escribir([])
    return { msg: 'Archivo reseteado' }
  }
}

export default NumerosFileDAO
