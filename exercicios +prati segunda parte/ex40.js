
const resultadoOficial = [10, 15, 22, 30, 45];

function verificarAposta(aposta) {
    for (let i = 0; i < resultadoOficial.length; i++) {
        if (aposta[i] !== resultadoOficial[i]) {
            return false;
        }
    }
    return true;
}


const apostas = [
    [10, 15, 22, 30, 45],
    [5, 10, 20, 25, 30],
    [10, 15, 22, 30, 44],
    
];


for (let i = 0; i < apostas.length; i++) {
    const aposta = apostas[i];
    if (verificarAposta(aposta)) {
        console.log(`Aposta ${i + 1}: Ganhador`);
    } else {
        console.log(`Aposta ${i + 1}: Não ganhou`);
    }
}
