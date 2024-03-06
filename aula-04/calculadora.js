const math = require('mathjs');
class Calculadora {
    static soma(a, b) {
        this.validateNumbers(a, b);
        return math.add(a,b);
    }

    static subtracao(a, b) {
        this.validateNumbers(a, b);
        return math.subtract(a,b);
    }

    static divisao(a, b) {
        this.validateNumbers(a, b);
        if (b === 0) {
            throw new Error('Não é possível dividir por zero.');
        }
        return math.divide(a,b);
    }

    static multiplicacao(a, b) {
        this.validateNumbers(a, b);
        return math.multiply(a,b);
    }

    static validateNumbers(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Os argumentos devem ser números.');
        }
    }
}

module.exports = Calculadora;