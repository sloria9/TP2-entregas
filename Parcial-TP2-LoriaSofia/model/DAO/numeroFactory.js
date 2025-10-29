import NumerosMemDAO from './numerosMem.js'
import NumerosFileDAO from './numerosFile.js'

class NumerosFactory {
  static get(modo) {
    switch (modo) {
      case 'FILE':
        return new NumerosFileDAO()
      case 'MEM':
      default:
        return new NumerosMemDAO()
    }
  }
}

export default NumerosFactory
