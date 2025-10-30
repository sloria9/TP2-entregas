import fs from 'fs/promises'

class NumerosFileDAO {
  #ruta

  constructor() {
    this.#ruta = './data/numeros.json'
  }

  async #leerArchivo() {
    try {
      const contenido = await fs.readFile(this.#ruta, 'utf-8')
      const data = JSON.parse(contenido)
      if (!Array.isArray(data)) {
        return []
      }
      return data
        .map(item => Number(item?.numero ?? item))
        .filter(n => !Number.isNaN(n))
    }
    catch (error) {
      if (error.code === 'ENOENT') {
        return []
      }
      throw error
    }
  }

  async #escribirArchivo(numeros) {
    await fs.mkdir('data', { recursive: true })
    await fs.writeFile(this.#ruta, JSON.stringify(numeros, null, '\t'))
  }

  obtenerNumeros = async () => {
    return await this.#leerArchivo()
  }

  guardarNumero = async (data) => {
    const n = Number(data.numero ?? data)
    const numeros = await this.#leerArchivo()
    numeros.push(n)
    await this.#escribirArchivo(numeros)
    return n
  }

  borrarNumeros = async () => {
    await this.#escribirArchivo([])
    return { msg: 'Archivo reseteado' }
  }
}

export default NumerosFileDAO
