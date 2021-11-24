const matriz = [1, 2, 3, 4, 5];
const multip = matriz.map( (item)=> item * 2 );
console.log(multip);

/* ------------------------------------- */

const banana = {
    value: 3
}

const laranja = {
    value: 5
}

function mapWithThis (arr, thisArg) {
    return arr.map ( function (item) {
        return item * this.value;
    }, thisArg);
}

console.log('this -> banana', mapWithThis(matriz, banana));
console.log('this -> laranja', mapWithThis(matriz, laranja));