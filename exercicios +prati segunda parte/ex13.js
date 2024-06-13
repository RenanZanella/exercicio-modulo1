let vetor = [];
let primeiro = 1;
let segundo = 1;

for(let i = 0; i < 15; i++) {
    vetor.push(primeiro);
    let proximoNumero = primeiro + segundo;
    primeiro = segundo;
    segundo = proximoNumero;
}

console.log(vetor)