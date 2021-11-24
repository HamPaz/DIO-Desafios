const matriz3 = [1, 2, 3, 4, 5, 6, 7];
const somada = matriz3.reduce( (prev, curr)=> prev + curr );
console.log('somada=',somada);
/* ------------------------------------ */
function somaNum (arr) {
    return arr.reduce(function(prev,curr) {
        // console.log({prev});
        // console.log({curr},'\n')
        return prev + curr;
    });
}
console.log('somaNum=',somaNum(matriz3));