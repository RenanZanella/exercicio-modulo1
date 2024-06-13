let dados = {
    nome: "Daenerys Targaryen",
    filhos: ["Drogon", "Viserion", "Viserion"],
    seusPokemon: ["Charizard", "Flareon", "Dragonite", "Salamence"],
    idade: 23,
}

function filtrarArrays(obj) {
    let resultado = {};
    for (let chave in obj) {
        if (obj[chave] instanceof Array) {
            resultado[chave] = obj[chave];
        }
    }
    return resultado;
}

console.log(filtrarArrays)