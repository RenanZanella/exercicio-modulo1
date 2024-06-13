let dados = {
    nome: "Daenerys Targaryen",
    filhos: ["Drogon", "Viserion", "Viserion"],
    seusPokemon: ["Charizard", "Flareon", "Dragonite", "Salamence"],
    idade: 23,
    cidade:"Pedra do Dragão",
}

function contar(obj) {
    let contador = 0;
    for (let chave in obj) {
        if (typeof obj[chave] === 'string') {
            contador++;
        }
    }

    return contador;
}

let numeroStrings = contar(dados);
console.log(numeroStrings);