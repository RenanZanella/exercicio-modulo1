
let matrizI = [];

for (let i = 0; i < 7; i++) {
    matrizI[i] = [];
    for (let j = 0; j < 7; j++) {
        matrizI[i][j] = (i === j) ? 1 : 0;
    }
}


console.log("Matriz Identidade:");
for (let i = 0; i < 7; i++) {
    let linha = "  ";
    for (let j = 0; j < 7; j++) {
        linha += matrizI[i][j] + " ";
    }
    console.log(linha);
}
