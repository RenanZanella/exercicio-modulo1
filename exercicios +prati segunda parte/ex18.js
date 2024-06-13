
const prompt = require('prompt-sync')();

let registroFuncionario = {
    nome: "",
    cargo: "",
    salario: 0
};


registroFuncionario.nome = prompt("Digite o nome do funcionário:");
registroFuncionario.cargo = prompt("Digite o cargo do funcionário:");
registroFuncionario.salario = parseFloat(prompt("Digite o salário do funcionário:"));

console.log("Registro do funcionário:");
console.log("Nome:", registroFuncionario.nome);
console.log("Cargo:", registroFuncionario.cargo);
console.log("Salário:", registroFuncionario.salario);