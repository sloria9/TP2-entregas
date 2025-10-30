import config from '../config.js'
import NumerosFactory from '../model/DAO/numeroFactory.js'
import { validar } from './validaciones/validation.js'

class NumerosService {
  #modelo = null

  constructor() {
    // elige DAO según config (MEM o FILE)
    this.#modelo = NumerosFactory.get(config.MODO_PERSISTENCIA)
  }

  obtenerNumeros = async () => {
    const numeros = await this.#modelo.obtenerNumeros()
    return numeros
  }

  guardarNumero = async (numero) => {
    const res = validar(numero)
    if (res.result) {
      const numeroGuardado = await this.#modelo.guardarNumero(numero)
      return numeroGuardado
    } else {
      throw new Error(res.error.details[0].message)
    }
  }

  getPromedio = async () => {
    const numeros = await this.#modelo.obtenerNumeros()
    if (numeros.length === 0) return 0
    const sum = numeros.reduce((a, b) => a + b, 0)
    return sum / numeros.length
  }

  getMinMax = async () => {
    const numeros = await this.#modelo.obtenerNumeros()
    if (numeros.length === 0) return { min: null, max: null }

    const min = Math.min(...numeros)
    const max = Math.max(...numeros)
    return { min, max }
  }

  getCantidad = async () => {
    const numeros = await this.#modelo.obtenerNumeros()
    return numeros.length
  }
}

export default NumerosService
