let primeiro = 1;
let segundo = 1;
let contador = 1;

console.log(primeiro);
console.log(segundo);

while(contador < 9) {
    proximoNumero = primeiro + segundo;
    console.log(proximoNumero);

    primeiro = segundo;
    segundo = proximoNumero;

    contador++;

}