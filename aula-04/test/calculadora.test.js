const Calculadora = require('../calculadora');
const math = require('mathjs');
describe('Calculadora ', () => {
    let calculator;

    // beforeEach(() => {
    //     calculator = new Calculadora();
    // });

    test('soma numeros', () => {
        const resultadoEsperado = math.add(5,3);
        expect(Calculadora.soma(5, 3)).toBe(resultadoEsperado);
    });

    test('subtrair numeros', () => {
        const resultadoEsperado = math.subtract(4,2);
        expect(Calculadora.subtracao(4,2)).toBe(resultadoEsperado);
    });

    test('multiplicar', () => {
        const resultadoEsperado = math.multiply(4,2);
        expect(Calculadora.multiplicacao(4, 2)).toBe(resultadoEsperado);
    });

    test('dividir ', () => {
        const resultadoEsperado = math.divide(8,2);
        expect(Calculadora.divisao(8, 2)).toBe(resultadoEsperado);
    });

    test('divide por zero', () => {
        const valor1 = 8
        const valor2 = 0
        const resultadoEsperado = math.divide(8,0);
        expect(() => Calculadora.divisao(valor1, valor2)).toThrow("Não é possível dividir por zero.");
    });

    test('valida tipo de argumentos', () => {
        const valor1 = "5"
        const valor2 = 3
        expect(() => Calculadora.soma(valor1,valor2)).toThrow("Os argumentos devem ser números.");
    });
});