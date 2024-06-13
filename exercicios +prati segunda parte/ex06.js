const prompt = require('prompt-sync')();

const numeroSorteado = Math.floor(Math.random() * 5) + 1;
let tentativas = 0;
let palpite;

console.log("Tente adivinhar o número sorteado entre 1 e 5.");

while (true) {
    palpite = parseInt(prompt("Qual é o seu palpite? "));
    tentativas++;

    if (palpite < 1 || palpite > 5) {
        console.log("Por favor, digite um número entre 1 e 5.");
    } else if (palpite < numeroSorteado) {
        console.log("O número sorteado é maior.");
    } else if (palpite > numeroSorteado) {
        console.log("O número sorteado é menor.");
    } else {
        console.log(`Parabéns! Você adivinhou o número em ${tentativas} tentativas.`);
        break;
    }
}
