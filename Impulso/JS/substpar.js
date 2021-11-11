function substituiPares(array) {
    if (!array || !array.length) return -1;
    for (let i = 0 ; i < array.length ; i++) {
        if (array[i] !== 0 && array[i] % 2 === 0) {
            console.log(`Substituído o valor ${array[i]} por 0`);
            array[i] = 0;
        }
    }
    console.log(array);
}

let arr = [0, 1, 2, 3, 15, 17, 20, 24, 25, 27, 30, 33, 34, 43, 44, 45, 46, 50];
let arr2 = [];
console.log(substituiPares(arr2));