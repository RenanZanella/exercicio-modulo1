const vetor = [9, 5, 6, 7, -1, 2];

function operacoes(operacao, vetor) {
    if (operacao === 1) {
        let soma = 0;
        for (let i = 0; i < vetor.length; i++) {
            soma += vetor[i];
        }
        return soma;

    } else if (operacao === 2) {
        let produto = 1;
        for (let i = 0; i < vetor.length; i++) {
            produto = produto * vetor[i];
        }
        return produto;

    } else if (operacao === 3) {
        let media = 0;
        let contador = 0;
        for (let i = 0; i < vetor.length; i++) {
            media += vetor[i];
            contador++
        }
        return media/contador;

    } else if (operacao === 4) {
        let vetorOrde = [...vetor].sort((a, b) => a - b)
        return vetorOrde;

    } else if(operacao === 5) {
        return vetor;
    }
}

console.log(operacoes(1, vetor));
console.log(operacoes(2, vetor));
console.log(operacoes(3, vetor));
console.log(operacoes(4, vetor));
console.log(operacoes(5, vetor));