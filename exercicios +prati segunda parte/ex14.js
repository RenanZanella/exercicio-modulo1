const prompt = require('prompt-sync')();
let contador = 1;
let vetor = [];

for(let i = 0; i < 7; i++) {
    const nome = prompt(`Digite o ${contador}° nome: `)
    vetor.push(nome);
    contador++;
}

for(let i = vetor.length - 1; i >=0; i--) {
    console.log(vetor[i]);
}