class queryManipulador {
    constructor(){
        this.query = '';
    }
   
    select(campos){
        this.query += `SELECT ${campos} `
        return this;
    }

    from(table){
        this.query += `FROM ${table} `
        return this;
    }
    where(condicao){
        this.query += `WHERE ${condicao} `
        return this;
    }
    orderBy(campo, direcao){
        this.query += `ORDER BY ${campo} ${direcao}`
        return this;
    }
    result(){
        return this.query;
    }
}

module.exports = queryManipulador;