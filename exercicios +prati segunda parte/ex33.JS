const matriz = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
];

let produto = 1;
for (let i = 0; i < matriz.length; i++) {
    produto = produto * matriz[i][i];
}

let contador=0;
let soma = 0;

for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][(matriz.length - 1) - i];
        contador++;
        console.log((matriz.length - 1) - i)
}

console.log(produto*(soma/contador));