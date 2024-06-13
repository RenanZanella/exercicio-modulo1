const matrizM = [
    [1, 2, 3, 4, 5, 6],
    [11, 12, 13, 14, 15, 16],
    [31, 41, 51, 54, 1, 11],
    [23, 20, 21, 22, 56, 11],
    [25, 26, 27, 28, 123, 111],
    [31, 63, 53, 43, 12, 1111],
];

const valorA = 5;

const vetorV = matrizM.flat().map(elemento => elemento * valorA);

console.log("Vetor V:");
vetorV.forEach(elemento => console.log(elemento));