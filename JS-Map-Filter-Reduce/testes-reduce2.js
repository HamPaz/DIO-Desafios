const saldo = 100;
const lista = [
    {   produto: 'sabonete',
        valor: 8},
    {   produto: 'leite',
        valor: 4},
    {   produto: 'bolacha',
        valor: 3},
    {   produto: 'carne',
        valor: 50},
    {   produto: 'pao',
        valor: 8}
];

function saldoFinal (lista, saldo) {
    return lista.reduce( (previous, current, index)=> {
        console.log("Rodada", index);
        console.log({ previous });
        console.log({ current });
        return previous - current.valor;
    }, saldo)
}

console.log('Resta após as compras:', saldoFinal(lista, saldo));