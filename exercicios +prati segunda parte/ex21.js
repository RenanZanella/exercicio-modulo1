//= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

const prompt = require('prompt-sync')();

function pesoIdeal(sexo, altura) {
    if( sexo === 'm') {
        const peso = 72.7 * altura - 58;
        return peso;
    } else {
        const peso = 62.1 * altura - 44.7;
        return peso;
    }
}

const pessoas = prompt("Digite seu sexo M mascolino e F para feminino: ").toUpperCase();
const alturas = parseFloat(prompt("Digite sua altura (EX.:1.86): "));
const pesoIdealdaPessoa = pesoIdeal(pessoas, alturas);
console.log(`Seu peso ideal é ${pesoIdealdaPessoa.toFixed(2)}kg.`);

