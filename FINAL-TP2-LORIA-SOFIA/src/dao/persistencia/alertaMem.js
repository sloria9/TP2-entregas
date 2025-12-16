class AlertasMem {
    constructor() {
        this.alertas = [];
    }

    saveAlerta(alerta) {
        this.alertas.push(alerta);
    }
}

export default new AlertasMem();