const matriz2 = [1, 2, 3, 4, 5, 6, 7];
const filtraPar = matriz2.filter( (item)=> item % 2 === 0);
console.log(filtraPar);

/* --------------------------------- */
function filtraPares (arr) {
    return arr.filter(callback);
}

function callback (item) {
    return item % 2 === 0;
}

console.log(filtraPares(matriz2));