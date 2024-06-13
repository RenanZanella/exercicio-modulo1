const prompt = require('prompt-sync')();


function escolhaComputador() {
    const escolhas = ['pedra', 'papel', 'tesoura'];
    const indice = Math.floor(Math.random() * 3);
    return escolhas[indice];
}


function determinarVencedor(jogador, computador) {
    if (jogador === computador) {
        return "Empate!";
    } else if (
        (jogador === 'pedra' && computador === 'tesoura') ||
        (jogador === 'papel' && computador === 'pedra') ||
        (jogador === 'tesoura' && computador === 'papel')
    ) {
        return "Você venceu!";
    } else {
        return "Você perdeu!";
    }
}


const escolhasValidas = ['pedra', 'papel', 'tesoura'];
let jogador = prompt("Escolha pedra, papel ou tesoura: ");

while (!escolhasValidas.includes(jogador)) {
    console.log("Escolha inválida. Tente novamente.");
    jogador = prompt("Escolha pedra, papel ou tesoura: ");
}

const computador = escolhaComputador();

console.log(`Você escolheu: ${jogador}`);
console.log(`O computador escolheu: ${computador}`);

const resultado = determinarVencedor(jogador, computador);
console.log(resultado);
