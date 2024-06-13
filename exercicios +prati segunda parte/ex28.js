
function somaAcima(matriz) {
    let soma = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = i + 1; j < 10; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}


function somaAbaixo(matriz) {
    let soma = 0;
    for (let i = 1; i < 10; i++) {
        for (let j = 0; j < i; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}


const matriz = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let somaAci = somaAcima(matriz);
let somaAbaix = somaAbaixo(matriz);

console.log('Soma dos elementos acima da diagonal principal: ', somaAci);
console.log('Soma dos elementos abaixo da diagonal principal: ', somaAbaix);
