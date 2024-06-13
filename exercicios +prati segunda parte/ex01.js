const prompt = require('prompt-sync')();

let quantCigarros = parseInt(prompt("Qauntos cigarros você fuma por dia? "));
let anosFumantes = parseInt(prompt("Fuma a quantos anos? "));


let vida = (quantCigarros*(anosFumantes*365)*10)/1440;

console.log(`Você perdeu aproximadamente ${vida.toFixed(2)} dias de vida devido ao fumo.`);


