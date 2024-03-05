// toEqual
// igualdade do valores
test('add 1+2 to equal 3', ()=>{
    const obj = {}
    const objEsperado = {}
    expect(obj).toEqual(objEsperado);
})

test('Test to be obj', ()=>{
    const obj = 4
    const objEsperado = 4
    expect(obj).toBe(obj);
});

test('Negacao do to be', () =>{
    expect(2+2).not.toBe(5);
})


test('Null is Falsy', ()=>{
    expect(null).toBeFalsy();
})

if(344)
test(' 344 é Truthy', () =>{
    expect(344).toBeTruthy();
})

// verifica se uma string corresponde a uma expressao regular

test('Se existe expressao Regular', ()=>{
    expect('Se').not.toMatch(/I/);
})

// verificar se num array ou uma string possui determinado valor
test('Verificar frutas se existe banana', () =>{
    const listaFrutas = ["maças", "bananas", "peras"];
    expect(listaFrutas).toContain("bananas");
});
// verificar o tamanho do array

test('A lista tem 3 items', () =>{
    const listaFrutas = ["maças", "bananas", "peras"];
    expect(listaFrutas).toHaveLength(3);
})

function throwError(){
    throw new Error('error!')
}

test('Throw error', ()=>{
    expect(throwError).toThrow();
})