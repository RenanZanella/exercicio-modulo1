let inventarioLojaA = {
    "canetas": 10,
    "borrachas": 5,
    "cadernos": 3,
    "lápis": 8,
    "régua": 2,
    "apontadores": 3
};

let inventarioLojaB = {
    "borrachas": 3,
    "cadernos": 2,
    "lápis": 6,
    "apontadores": 1,
    "tesoura": 4,
    "cola": 5
};

function combinar(inventarioLojaA, inventarioLojaB) {
    let invCombinado = {};

    for (let item in inventarioLojaA) {
        invCombinado[item] = inventarioLojaA[item];
    }

    for (let item in inventarioLojaB) {
        if (invCombinado[item]) {
            invCombinado[item] += inventarioLojaB[item];
        } else {
            invCombinado[item] = inventarioLojaB[item];
        }
    }

    return invCombinado;
}

let inventarioCombinado = combinar(inventarioLojaA, inventarioLojaB);

console.log(inventarioCombinado);