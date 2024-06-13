const prompt = require('prompt-sync')();

let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;

function adicionarFuncionario() {
    const salario = parseFloat(prompt("Digite o salário do funcionário: "));
    if (isNaN(salario)) {
        console.log("Salário inválido. Tente novamente.");
        return;
    }

    const sexo = prompt("Digite o sexo do funcionário (M para Masculino e F para Feminino): ").toUpperCase();
    if (sexo !== 'M' && sexo !== 'F') {
        console.log("Sexo inválido. Tente novamente.");
        return;
    }

    if (sexo === 'M') {
        totalSalarioHomens += salario;
    } else if (sexo === 'F') {
        totalSalarioMulheres += salario;
    }
}

function perguntarContinuar() {
    const resposta = prompt("Deseja continuar inserindo dados? (S para Sim e N para Não): ").toUpperCase();
    return resposta === 'S';
}

do {
    adicionarFuncionario();
} while (perguntarContinuar());

console.log(`Total de salário pago aos homens: R$ ${totalSalarioHomens.toFixed(2)} e às mulheres é de: R$ ${totalSalarioMulheres.toFixed(2)} `);
