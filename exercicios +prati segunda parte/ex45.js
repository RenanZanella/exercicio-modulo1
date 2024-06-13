let array = ["maçã", "banana", "maçã", "laranja", "banana", "maçã", "uva"];


function contarOcorrencias(array) {
    let contador = {};

    array.forEach((elemento) => {
        if (contador[elemento]) {
            contador[elemento]++;
        } else {
            contador[elemento] = 1;
        }
    });

    return contador;
}

let resultado = contarOcorrencias(array);

console.log(resultado);
