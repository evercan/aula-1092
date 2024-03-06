const arrayManipulador = require('../arrayManipulador');

test('validação de array', () =>{

    // filtro
    // * 2
    // sort    
    const array = [1,2,3,4,5];
    const result = new arrayManipulador(array)
    .filter(num => num %2 === 0)
    .map(num => num * 2)
    .sort((a,b) => b-a)
    .getResult();

    expect(result).toEqual([8, 4]);

});