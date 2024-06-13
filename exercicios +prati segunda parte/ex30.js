const matriz = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
];

const vetorSL = [];
const vetorSC = [];

function somaLinha(matriz, linha) {
    let soma = 0;
    for (let j = 0; j < 5; j++) {
        soma += matriz[linha][j];
    }
    return soma;
}


function somaColuna(matriz, coluna) {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        soma += matriz[i][coluna];
    }
    return soma;
}

for (let i = 0; i < 5; i++) {
    let somaL = somaLinha(matriz, i)
    vetorSL.push(somaL);
}

for (let j = 0; j < 5; j++) {
    let somaC = somaColuna(matriz, j);
    vetorSC.push(somaC);
}

console.log(`O VETOR FORMADO PELA SOMA DAS COLUNAS É: ${vetorSC}`);
console.log(`O VETOR FORMADO PELA SOMA DAS LINHAS É: ${vetorSL}`);
console.log('A MATRIZ USADA É:');
console.log(matriz)