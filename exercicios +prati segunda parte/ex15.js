const prompt = require('prompt-sync')();
let contador = 1;
let vetor = [];

for(let i = 0; i < 10; i++) {
    const numero = prompt(`Digite o ${contador}° número: `)
    vetor.push(numero);
    contador++;
}

for(let i = 0; i < vetor.length; i++) {
    if(vetor[i] % 2 === 0) {
        console.log(`Número: ${vetor[i]} Posição ${i}`);
    }
}