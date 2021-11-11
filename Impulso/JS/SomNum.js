function somaNumeros(num1, num2) {
    const numIguais = num1 === num2;
    const somaNum = num1 + num2;
    var maior10 = '';
    var maior20 = '';
    var iguais = '';
    if (somaNum == 10) {
        maior10 = "igual a";
    } else {
        (somaNum > 10) ? maior10 = 'maior que' : maior10 = 'menor que';
    }
    if (somaNum == 20) {
        maior20 = 'igual a';
    } else {
        somaNum > 20 ? maior20 = 'maior que' : maior20 = 'menor que';
    }
    !numIguais ? iguais = ' não' : iguais = '';
    return `Os números ${num1} e ${num2} ${iguais} são iguais. Sua soma é ${somaNum}, que é ${maior10} 10 e ${maior20} 20.`
    // return `Os números `+ num1 +` e ` + num2 + iguais + ` são iguais. Sua soma é ` + somaNum + `, que é ` + maior10 + ` 10 e ` + maior20 + ` 20.`
}

console.log(somaNumeros(14, 7));