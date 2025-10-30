import fs from 'fs/promises'

class NumerosFileDAO {
  #ruta

  constructor() {
    this.#ruta = './data/numeros.json'
  }

  async #leerArchivo() {
    let numeros = []
    try {
      numeros = JSON.parse(await fs.promises.readFile(ruta, 'utf-8'))
      return numeros
    }
    catch {}

    return numeros
  }

  async #escribirArchivo(ruta, numeros) {
    await fs.writeFile(ruta, JSON.stringify(numeros, null, '\t'))
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
