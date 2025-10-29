import config from '../config.js'
import NumerosFactory from '../modelo/DAOs/numerosFactory.js'
import { validarNumero } from './validaciones/numero.js'

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
    // validación con Joi o lógica propia
    const res = validarNumero(numero)
    if (res.result) {
      const numeroGuardado = await this.#modelo.guardarNumero(numero)
      return numeroGuardado
    } else {
      throw new Error(res.error.details[0].message)
    }
  }

  borrarNumeros = async () => {
    const res = await this.#modelo.borrarNumeros()
    return res
  }

  obtenerPromedio = async () => {
    const numeros = await this.#modelo.obtenerNumeros()
    if (numeros.length === 0) return 0
    const sum = numeros.reduce((a, b) => a + b, 0)
    return sum / numeros.length
  }

  obtenerMinMax = async () => {
    const numeros = await this.#modelo.obtenerNumeros()
    if (numeros.length === 0) return { min: null, max: null }

    const min = Math.min(...numeros)
    const max = Math.max(...numeros)
    return { min, max }
  }

  obtenerCantidad = async () => {
    const numeros = await this.#modelo.obtenerNumeros()
    return numeros.length
  }
}

export default NumerosService
