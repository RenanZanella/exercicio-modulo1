


function calcularMulta(velocidadeCarro) {
    
    if (velocidadeCarro > 80) {
        const excessoVelocidade = velocidadeCarro - 80;
        const valorMulta = excessoVelocidade * 5;
        return valorMulta;
    } else {
        return 0;
    }
}
const velocidade = parseFloat(prompt("Qual a velocidade do carro (em km/h)? "));


const valorMulta = calcularMulta(velocidade);


if (valorMulta > 0) {
    console.log(`Você foi multado por excesso de velocidade!`);
    console.log(`Velocidade permitida: 80 km/h`);
    console.log(`Valor da multa: R$ ${valorMulta.toFixed(2)}`);
} else {
    console.log("Você está dentro do limite de velocidade! Dirija com segurança!");
}