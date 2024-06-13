let funcionarios = [
    { matricula: 101, nome: "Fulano", salarioBruto: 3000 },
    { matricula: 102, nome: "Ciclano", salarioBruto: 2500 },
    { matricula: 103, nome: "Beltrano", salarioBruto: 2800 },
    { matricula: 104, nome: "Dona Maria", salarioBruto: 3200 },
    { matricula: 105, nome: "João", salarioBruto: 2700 },
    { matricula: 106, nome: "Maria", salarioBruto: 2900 },
    { matricula: 107, nome: "Pedro", salarioBruto: 3100 },
    { matricula: 108, nome: "Ana", salarioBruto: 2600 },
    { matricula: 109, nome: "José", salarioBruto: 3300 },
    { matricula: 110, nome: "Mariana", salarioBruto: 2800 }
];

function calcularSalario(salarioBruto) {
    let deducaoINNS = salarioBruto*0.12;
    let salarioLiquido = salarioBruto - deducaoINNS;
    return salarioLiquido;
}

console.log("Contracheques: ")
for (let funcionario of funcionarios) {
    let salario = calcularSalario(funcionario.salarioBruto);
    let inss = funcionario.salarioBruto * 0.12;

    console.log("Matrícula:", funcionario.matricula);
    console.log("Nome:", funcionario.nome);
    console.log("Salário bruto:", funcionario.salarioBruto);
    console.log("Dedução INSS:", inss);
    console.log("Salário líquido:", salario);
    console.log("-----------------------------");
}