const prompt = require('prompt-sync')();


function podeFormarTriangulo(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

const a = parseFloat(prompt('Digite o comprimento do primeiro segmento de reta: '));
const b = parseFloat(prompt('Digite o comprimento do segundo segmento de reta: '));
const c = parseFloat(prompt('Digite o comprimento do terceiro segmento de reta: '));


if (podeFormarTriangulo(a, b, c)) {
    console.log("Os segmentos podem formar um triângulo.");
} else {
    console.log("Os segmentos não podem formar um triângulo.");
}
