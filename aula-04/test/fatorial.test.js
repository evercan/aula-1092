const {fatorial} = require('../fatorial');

test('faça o calculo do fatorial', ()=>{
    const numFatorial = 5;
    expect(fatorial(numFatorial)).toEqual(120);
})

