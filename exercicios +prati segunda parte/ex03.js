const prompt = require('prompt-sync')();

function precoPassagem(distancia) {
    if(distancia > 200){
        const valorDistMaior = distancia * 0.45;
        return valorDistMaior;
    } else {
        const valorDistMenor = distancia * 0.5;
        return valorDistMenor  ;
    }
}

const distanciaPercorrer = parseInt(prompt("Qual a distância que vai percorrer? "));

const valorViagem = precoPassagem(distanciaPercorrer);

console.log(`Valor da viagem: R$ ${valorViagem.toFixed(2)}`)