const CalculadoraEncadeada = require('../calculadoraEncadeada');

test('testando operacao encadeada', () =>{

    // numeroInicial = (10)
    // add  = (5) +10 = 15
    // multiplica = (2) * 15 = 30
    // divide = 30 / (3) = 10
    // subtrai = 10 - (2) = 8 
    // resultado  = esperado
    const result = new CalculadoraEncadeada(10)
    .add(5)
    .multiplica(2)
    .divide(3)
    .diminuir(2)
    .getValue();

    console.log('valor: ',result);
    expect(result).toBe(8);

})