class SensoresMem {
    constructor() {
        this.sensores = [];
    }

    findSensor(id) {
        return this.sensores.find(s => s.id === id);
    }

    saveSensor(lectura) {
        const index = this.sensores.findIndex(s => s.id === lectura.id);
        if (index >= 0) {
            this.sensores[index] = lectura;
            return "actualizado";
        } else {
            this.sensores.push(lectura);
            return "creado";
        }
    }

    getAll() {
        return this.sensores;
    }
}

export default new SensoresMem();