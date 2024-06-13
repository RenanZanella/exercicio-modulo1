function contarAcertos(gabarito, respostas) {
    let acertos = 0;
    for (let i = 0; i < gabarito.length; i++) {
        if (gabarito[i] === respostas[i]) {
            acertos++;
        }
    }
    return acertos;
}


const gabarito = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'];

const respostasDosAlunos = [
    { nome: "João Gomes", respostas: ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'] },
    { nome: "Maria", respostas: ['B', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'] },
    { nome: "Pedro", respostas: ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'] },
    { nome: "Ana", respostas: ['B', 'A', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'] },
    { nome: "Carlos", respostas: ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'] },
    { nome: "Juliana", respostas: ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'] },
    { nome: "Lucas", respostas: ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'] },
    { nome: "Mariana Chgas", respostas: ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D'] },
    { nome: "Fernando", respostas: ['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C'] },
    { nome: "Patricia", respostas: ['B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A'] },
    { nome: "Rafael", respostas: ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'] },
    { nome: "Jessica", respostas: ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'] },
    { nome: "Gabriel", respostas: ['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C'] },
    { nome: "Camila S", respostas: ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D'] },
    { nome: "Lucas", respostas: ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'] },
    { nome: "Mariana Silva", respostas: ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D'] },
    { nome: "Fernando Flores", respostas: ['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C'] },
    { nome: "Patricia Chagas", respostas: ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'] },
    { nome: "Rafael Flores", respostas: ['B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A'] },
    { nome: "Julia", respostas: ['C', 'B', 'D', 'A', 'C', 'D', 'B', 'A', 'C', 'D', 'B', 'A', 'C', 'D', 'B', 'A', 'C', 'D', 'B', 'A'] },
    { nome: "Diego", respostas: ['D', 'A', 'C', 'B', 'D', 'A', 'C', 'B', 'D', 'A', 'C', 'B', 'D', 'A', 'C', 'B', 'D', 'A', 'C', 'B'] },
    { nome: "Isabela", respostas: ['A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B'] },
    { nome: "Carlos Gomes", respostas: ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'] },
    { nome: "Juliana Moura", respostas: ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'] },
    { nome: "Lucas Flores", respostas: ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'] },
    { nome: "Mariana", respostas: ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D'] },
    { nome: "Fernando Silva", respostas: ['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C'] },
    { nome: "Patricia Poeta", respostas: ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'] },
    { nome: "Lucia", respostas: ['C', 'B', 'D', 'A', 'C', 'D', 'B', 'A', 'C', 'D', 'B', 'A', 'C', 'D', 'B', 'A', 'C', 'D', 'B', 'A'] },
    { nome: "Daniel", respostas: ['D', 'A', 'C', 'B', 'D', 'A', 'C', 'B', 'D', 'A', 'C', 'B', 'D', 'A', 'C', 'B', 'D', 'A', 'C', 'B'] },
    { nome: "Isabela Gomes", respostas: ['A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B'] },
    { nome: "Eduardo", respostas: ['B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A'] },
];



for (let i = 0; i < respostasDosAlunos.length; i++) {
    const aluno = respostasDosAlunos[i];
    const numeroDeAcertos = contarAcertos(gabarito, aluno.respostas);


    if (numeroDeAcertos >= 12) {
        console.log(`${aluno.nome}: ${numeroDeAcertos} acertos - APROVADO`);
    } else {
        console.log(`${aluno.nome}: ${numeroDeAcertos} acertos - REPROVADO`);
    }
}