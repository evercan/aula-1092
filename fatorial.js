
function fatorial(valor){
    if(valor == 0 || valor == 1){
        return 1
    }
    return valor *(fatorial(valor-1))
}


module.exports = {fatorial}