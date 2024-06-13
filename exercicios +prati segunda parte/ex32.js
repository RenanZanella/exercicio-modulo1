const matriz = [
    [1, 7, 13, 4, -5, 2, 9, -8, 11, -6, 3, 10, -15],
    [6, 12, 2, -9, 15, 8, 3, 1, 10, -2, -4, 11, -13],
    [-3, 9, 5, 1, 7, -14, 2, 6, -8, 4, 11, 13, -10],
    [-4, 12, 1, 6, -11, 8, 15, -2, 7, 3, 9, -5, 10],
    [-7, 2, -9, 5, 14, 1, -12, 11, 3, 10, 6, -1, 13],
    [-10, 4, 12, -6, 3, 8, -14, 9, 5, -2, 15, 1, 7],
    [5, 9, -8, 6, 3, 11, -2, 10, 7, 1, -14, 4, -13],
    [2, 1, -4, 8, 13, -7, 9, -10, 3, 6, -11, 5, 15],
    [7, -9, 12, 4, 10, -6, 11, -1, 8, -3, 2, 13, -5],
    [-8, 1, 6, -15, 3, 9, -2, 12, 7, -4, 10, 5, 11],
    [15, 4, -10, 7, 13, 1, 11, -5, -2, 3, 12, 6, -9],
    [11, 8, -3, 6, 2, 5, -13, 7, 9, -8, 15, 1, -12]
];

for (let i = 0; i < matriz.length; i++) {
    let maiorElemento = Math.abs(matriz[i][0]);
    
    for (let j = 1; j < matriz[i].length; j++) {
        if (matriz[i][j] >= 0 && matriz[i][j] > maiorElemento) {
            maiorElemento = matriz[i][j];
        } else if (matriz[i][j] < 0 && -matriz[i][j] > maiorElemento) {
            maiorElemento = -matriz[i][j];
        }
    }
    
    for (let j = 0; j < matriz[i].length; j++) {
        matriz[i][j] = (matriz[i][j] / maiorElemento).toFixed(2);
        matriz[i][j] = parseFloat(matriz[i][j]);
    }
}

console.log(matriz);