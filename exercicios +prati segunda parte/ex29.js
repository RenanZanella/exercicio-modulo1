
let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];


function somaLinha(matriz) {
    let soma = 0;
    for (let j = 0; j < 5; j++) {
        soma += matriz[3][j];
    }
    return soma;
}


function somaColuna(matriz) {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        soma += matriz[i][1];
    }
    return soma;
}


function somaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        soma += matriz[i][i];
    }
    return soma;
}


function somaTodosElementos(matriz) {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}


let somaLinha4 = somaLinha(matriz); 
let somaColuna2 = somaColuna(matriz, 1);
let somaDiagonal = somaDiagonalPrincipal(matriz);
let somaTotal = somaTodosElementos(matriz);

console.log('Matriz:');
console.log(matriz)
console.log('Soma da linha 4: ', somaLinha4);
console.log('Soma da coluna 2: ', somaColuna2);
console.log('Soma da diagonal principal: ', somaDiagonal);
console.log('Soma de todos os elementos: ', somaTotal);
