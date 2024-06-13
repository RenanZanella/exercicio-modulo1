const prompt = require('prompt-sync')();

function programa(horas) {
    if (horas > 20) {
        return horas * 10;
    } else if (horas >= 10 && horas <= 20) {
        return horas * 5;
    } else {
        return horas * 2;
    }
}

const programaSaude = parseInt(prompt("Quantas horas você praticou atividades físicas? "));

const pontosValor = programa(programaSaude);

console.log(` Pontos: ${pontosValor}\n Valor a receber: R$ ${pontosValor*0.05.toFixed(2)}`);
