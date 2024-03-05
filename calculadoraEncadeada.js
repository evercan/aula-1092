class CalculadoraEncadeada {
    constructor(value=0){
        this.value = value;
    }
    add(numero1){
        this.value += numero1;
        return this;
    }
    multiplica(numero1){
        this.value *= numero1;
        return this;
    }

    divide(numero1){
        this.value /= numero1;
        return this;
    }

    diminuir(numero1){
        this.value -= numero1;
        return this;
    }

    getValue(){
        return this.value;
    }
}

module.exports = CalculadoraEncadeada;