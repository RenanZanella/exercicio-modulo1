const A = [
    [2, 4, 6, 8, 5],
    [6, 7, 18, 19, 11],
    [1, 22, 33, 54, 15],
];

const B = [
    [12, 21, 12, 13, 20],
    [71, 22, 15, 24, 14],
    [26, 16, 28, 29, 20],
];

const P = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];

for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B[0].length; j++) {
        let soma = 0;
        for (let k = 0; k < B.length; k++) {
        soma += A[i][k] * B[k][j];
        }
        P[i][j] = soma;
    }
}


console.log("Matriz produto P:");
for (let i = 0; i < P.length; i++) {
    console.log(P[i]);
}
