const prompt = require('prompt-sync')();
let contador = 1;
let nomes = [];
let idades = [];

for(let i = 0; i < 9; i++) {
    const nome = prompt(`Digite o ${contador}° nome: `)
    const idade = prompt(`Digite a idade do ${contador}° nome: `)
    nomes.push(nome);
    idades.push(idade);
    contador++;
}

console.log( );

for(let i = 0; i < idades.length; i++) {
    if(idades[i] < 18) {
        console.log(`Nome: ${nomes[i]} tem ${idades[i]} anos e é menor de idade.`);
    }
}