const queryManipulador = require('../queryManipulador');

test('validacao de query', () =>{

    // select *, nome, idade
    // from usuarios
    // where idade > 18
    // orderBy  nome desc
    
    const result = new queryManipulador()
    .select('nome')
    .from('usuarios')
    .where('idade > 18')
    .orderBy('nome', 'DESC')
    .result();

    console.log(result);
    expect(result).toEqual('SELECT nome FROM usuarios WHERE idade > 18 ORDER BY nome DESC');

});