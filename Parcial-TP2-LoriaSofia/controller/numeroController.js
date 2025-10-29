class NumeroController {
  
  
  constructor(service) {
    this.service = service;
  }

  postEntrada = async (req, res) => {
    try {
      const { numero } = req.body ?? {};
      const n = await this.service.add(numero);
      return res.status(201).json({ ok: true, numero: n });
    } catch(error) {
      res.status(500).json({url: req.url, method: req.method, error: error.message})
    }
  };

  getEntrada = async (req, res) => {
    try {
      const numeros = await this.service.getAll();
      return res.json({ numeros });
    } catch(error) {
      res.status(500).json({url: req.url, method: req.method, error: error.message})
    }
  };

  getPromedio = async (req, res) => {
    try {
      const promedio = await this.service.getPromedio();
      return res.json({ promedio });
    } catch(error) {
      res.status(500).json({url: req.url, method: req.method, error: error.message})
    }
  };

  getMinMax = async (req, res) => {
    try {
      const { min, max } = await this.service.getMinMax();
      return res.json({ min, max });
    } catch(error) {
      res.status(500).json({url: req.url, method: req.method, error: error.message})
    }
  };

  getCantidad = async (req, res) => {
    try {
      const cantidad = await this.service.getCantidad();
      return res.json({ cantidad });
    } catch(error) {
      res.status(500).json({url: req.url, method: req.method, error: error.message})
    }
  };
}
