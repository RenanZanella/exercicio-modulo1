const vetor = [
    51,   11,   -49,  -62, -36, 75,  -7,  58,  34,  -2,   -86, -54,
    4,    62,   null, -23, -59, -83, -1,  69,  -96, 90,   -59, 93,
    67,   80,   -80,  56,  -83, -66, -83, 19,  -91, -28,  10,  -4,
    -91,  null, 70,   22,  96,  -7,  71,  4,   0,   4,    34,  -99,
    33,   -59,  55,   -21, -15, 19,  95,  -75, 16,  null, 59,  -84,
    -49,  null, -12,  49,  -88, 17,  14,  -2,  -46, -68,  -13, 17,
    -43,  78,   29,   43,  -62, 100, -69, 77,  82,  null, -19, 12,
    -31,  -25,  37,   98,  15,  9,   -68, -99, -47, null, -70, 33,
    null, 37,   null, 72
];

function lerVetor(vetor) {
    let vetorB = [];
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 0 && vetor[i] !== null) {
            vetorB.push(vetor[i]);
        }
    }
    return vetorB;
}

console.log(lerVetor(vetor));
