class arrayManipulador {
    constructor(array){
        this.array = array;
    }
    filter(callback){
        this.array = this.array.filter(callback);
        return this;
    }
    map(callback){
        this.array = this.array.map(callback);
        return this;
    }

    sort(compar){
        this.array = this.array.sort(compar);
        return this;
    }

    getResult(){
        return this.array;
    }
}

module.exports = arrayManipulador;