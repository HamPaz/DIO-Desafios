function exp(array, num=1) {
    const result = [];
    for (let i=0 ; i < array.length ; i++) {
        result.push(array[i] ** num);
    }
    return result;
}

console.log(exp([1, 2, 3, 4], 3))