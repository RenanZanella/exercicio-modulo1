
let dadosPessoas = [
    { salario: 1500, numFilhos: 2 },
    { salario: 2500, numFilhos: 1 },
    { salario: 3000, numFilhos: 3 },
    { salario: 1800, numFilhos: 0 },
    { salario: 3200, numFilhos: 2 },
    { salario: 2000, numFilhos: 1 },
    { salario: 2800, numFilhos: 4 },
    { salario: 2600, numFilhos: 2 },
    { salario: 2200, numFilhos: 3 },
    { salario: 3500, numFilhos: 1 },
    { salario: 2700, numFilhos: 2 },
    { salario: 1900, numFilhos: 0 },
    { salario: 3300, numFilhos: 3 },
    { salario: 2400, numFilhos: 2 },
    { salario: 3100, numFilhos: 1 },
    { salario: 2000, numFilhos: 0 },
    { salario: 2800, numFilhos: 3 },
    { salario: 3600, numFilhos: 2 },
    { salario: 1700, numFilhos: 1 },
    { salario: 3000, numFilhos: 2 },
    { salario: 2500, numFilhos: 0 },
    { salario: 2200, numFilhos: 4 },
    { salario: 3400, numFilhos: 3 },
    { salario: 250, numFilhos: 2 },
    { salario: 2900, numFilhos: 1 },
    { salario: 2100, numFilhos: 3 },
    { salario: 250, numFilhos: 0 },
    { salario: 3200, numFilhos: 2 },
    { salario: 2700, numFilhos: 1 },
    { salario: 1900, numFilhos: 2 },
    { salario: 3000, numFilhos: 4 },
    { salario: 2400, numFilhos: 1 },
    { salario: 3100, numFilhos: 0 },
    { salario: 2300, numFilhos: 3 },
    { salario: 3300, numFilhos: 2 },
    { salario: 330, numFilhos: 1 },
    { salario: 2800, numFilhos: 0 },
    { salario: 3400, numFilhos: 2 },
    { salario: 2100, numFilhos: 3 },
    { salario: 2900, numFilhos: 1 },
    { salario: 2200, numFilhos: 4 },
    { salario: 250, numFilhos: 2 },
    { salario: 2500, numFilhos: 1 },
    { salario: 1800, numFilhos: 3 },
    { salario: 3100, numFilhos: 0 },
    { salario: 2400, numFilhos: 2 },
    { salario: 3200, numFilhos: 1 },
    { salario: 1900, numFilhos: 4 },
    { salario: 3300, numFilhos: 2 },
    { salario: 250, numFilhos: 1 },
    { salario: 2800, numFilhos: 3 },
    { salario: 1700, numFilhos: 0 },
    { salario: 3000, numFilhos: 2 },
    { salario: 2300, numFilhos: 1 },
    { salario: 2500, numFilhos: 3 },
    { salario: 3600, numFilhos: 2 },
    { salario: 2100, numFilhos: 1 },
    { salario: 2900, numFilhos: 0 },
    { salario: 2200, numFilhos: 4 },
    { salario: 3400, numFilhos: 2 },
    { salario: 2700, numFilhos: 1 },
    { salario: 3000, numFilhos: 3 },
    { salario: 1800, numFilhos: 2 },
    { salario: 3100, numFilhos: 1 },
    { salario: 2400, numFilhos: 0 },
    { salario: 3200, numFilhos: 2 },
    { salario: 1900, numFilhos: 3 },
    { salario: 3300, numFilhos: 1 },
    { salario: 2600, numFilhos: 4 },
    { salario: 2800, numFilhos: 2 },
    { salario: 3500, numFilhos: 1 },
    { salario: 2500, numFilhos: 0 },
];


function calcularEstatisticasPopulacao(dadosPessoas) {
    let somaSalarios = 0;
    let somaFilhos = 0;
    let maiorSalario = 0;
    let contadorSalarioAte350 = 0;
    let totalPessoas = dadosPessoas.length;

    for (let pessoa of dadosPessoas) {
        let salario = pessoa.salario;
        let numFilhos = pessoa.numFilhos;
        
        somaSalarios += salario;
        somaFilhos += numFilhos;

        if (salario > maiorSalario) {
            maiorSalario = salario;
        }

        if (salario <= 350) {
            contadorSalarioAte350++;
        }
    }

    let mediaSalario = somaSalarios / totalPessoas;
    let mediaFilhos = somaFilhos / totalPessoas;
    let percentualSalarioAte350 = (contadorSalarioAte350 / totalPessoas) * 100;

    return {
        mediaSalario: mediaSalario,
        mediaFilhos: mediaFilhos,
        maiorSalario: maiorSalario,
        percentualSalarioAte350: percentualSalarioAte350
    };
}

let estatisticas = calcularEstatisticasPopulacao(dadosPessoas);

console.log("Média de salário da população:", estatisticas.mediaSalario.toFixed(2));
console.log("Média do número de filhos:", estatisticas.mediaFilhos.toFixed(2));
console.log("Maior salário:", estatisticas.maiorSalario.toFixed(2));
console.log("Percentual de pessoas com salário até R$ 350,00:", estatisticas.percentualSalarioAte350.toFixed(2) + "%");
