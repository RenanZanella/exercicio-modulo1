const prompt = require('prompt-sync')();

function precoCarro(tipoCarro, distanciaPercorrida, tempo) {
    if (tipoCarro === 'popular') {
        if (distanciaPercorrida > 100) {
            return (distanciaPercorrida * 0.1) + (tempo * 90);
        } else {
            return (distanciaPercorrida * 0.2) + (tempo * 90);
        }
    } else if (tipoCarro === 'luxo') {
        if (distanciaPercorrida > 200) {
            return (distanciaPercorrida * 0.25) + (tempo * 150);
        } else {
            return (distanciaPercorrida * 0.3) + (tempo * 150);
        }
    }
}

const tipoVeiculo = prompt("Qual o tipo do veículo (luxo ou popular)? ");
const quilometragem = parseInt(prompt("Qual a distância que vai percorrer? "));
const dias = parseInt(prompt("Quantos dias de aluguel? "));

const valorAluguel = precoCarro(tipoVeiculo, quilometragem, dias);

console.log(`Valor do aluguel do veículo: R$ ${valorAluguel.toFixed(2)}`);
