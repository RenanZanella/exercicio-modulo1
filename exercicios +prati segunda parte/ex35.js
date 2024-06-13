const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let vetorPar = [];
let vetorImpar = [];

for (let i = 0; i < valores.length; i++) {
    let valor = valores[i];
    if (valor % 2 === 0) {
        if (vetorPar.length < 5) {
            vetorPar.push(valor);
        } else {
            console.log("O vetor de pares está cheio.");
        }
    } else {
        if (vetorImpar.length < 5) {
            vetorImpar.push(valor);
        } else {
            console.log("O vetor de ímpares está cheio.");
        }
    }
}

console.log("Valores pares:", vetorPar);
console.log("Valores ímpares:", vetorImpar);
