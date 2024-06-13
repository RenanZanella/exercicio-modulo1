
const matrizM = [
    [1, -2, 3, -4, 5, 6, -7, 8],
    [9, 10, -11, 12, -13, 14, 15, 16],
    [-17, 18, 19, -20, 21, 22, 23, -24],
    [25, -26, 27, 28, 29, -30, 31, 32],
    [-33, 34, 35, 36, 37, -38, 39, 40],
    [41, 42, -43, 44, -45, 46, 47, -48]
];


let vetorC = [];


for (let i = 0; i < matrizM.length; i++) {
    let contadorNegativos = 0;
    for (let j = 0; j < matrizM[i].length; j++) {
        if (matrizM[i][j] < 0) {
            contadorNegativos++;
        }
    }
    vetorC.push(contadorNegativos);
}

console.log("Vetor C contendo a quantidade de elementos negativos em cada linha de M:");
console.log(vetorC);
