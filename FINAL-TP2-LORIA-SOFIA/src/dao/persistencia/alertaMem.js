class AlertasMem {
    constructor() {
        this.alertas = [];
    }

    saveAlerta(alerta) {
        this.alertas.push(alerta);
    }

    getAll() {
        return this.alertas;
    }
}

export default new AlertasMem();
