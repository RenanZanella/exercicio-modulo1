const prompt = require('prompt-sync')();

let soma = 0;
let menor = null;
let totalValores = 0;
let valoresPares = 0;

function lerNumero() {
    const numero = parseFloat(prompt("Digite um número: "));
    if (isNaN(numero)) {
        console.log("Inválido...");
        return null;
    }
    return numero;
}

function perguntarContinuar() {
    const resposta = prompt("Continuar inserindo números? S para sim e N para não: ").toUpperCase();
    return resposta === 'S';
}

do {
    const numero = lerNumero();
    if (numero === null) {
        continue;
    }

    soma += numero;
    totalValores++;

    if (menor === null || numero < menor) {
        menor = numero;
    }

    if (numero % 2 === 0) {
        valoresPares++;
    }

} while (perguntarContinuar());

const mediaValores = totalValores > 0 ? soma / totalValores : 0;

console.log(`Somatório dos valores: ${soma}`);
console.log(`Menor valor digitado: ${menor}`);
console.log(`Média dos valores: ${mediaValores.toFixed(2)}`);
console.log(`Quantidade de valores pares: ${valoresPares}`);
