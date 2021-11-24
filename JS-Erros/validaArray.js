function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError ("Parâmetros não informados");
        if (typeof arr !== 'object') throw new TypeError ("Array precisa ser do tipo 'object'!");
        if (typeof num !== 'number') throw new TypeError ("Número precisa ser do tipo 'number'!");
        if (arr.length !== num) throw new RangeError ("Tamanho informado inválido!");
        return arr;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Erro de referência");
        } else if (e instanceof TypeError) {
            console.log("Erro de tipo");
        } else if (e instanceof RangeError) {
            console.log("Erro de range");
        } else {
            console.log("Tipo de erro não esperado", e)
        }
        /*
        console.log(e.name);
        console.log(e.stack); */
        console.log(e.message);
        
    }
}

console.log(validaArray('[1,2,3,4,5]', 5));