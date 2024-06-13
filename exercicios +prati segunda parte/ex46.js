
let vendas = [
    { vendedor: "João", valor: 1500 },
    { vendedor: "Maria", valor: 2000 },
    { vendedor: "Pedro", valor: 1000 },
    { vendedor: "Maria", valor: 2500 },
    { vendedor: "João", valor: 1800 }
];

function vendasVendedor(vendas, nomeVendedor) {
    let total = 0;
    vendas.forEach((venda) => {
        if (venda.vendedor === nomeVendedor) {
            total += venda.valor;
        }
    });
    return total;
}

function totalVendas(vendas) {
    let total = 0;
    vendas.forEach((venda) => {
        total += venda.valor;
    });
    return total;
}

vendas.forEach((venda) => {
    console.log(`${venda.vendedor} realizou um total de vendas de R$ ${venda.valor}.`);
});

console.log(`O total de vendas foi de R$ ${totalVendas(vendas)}.`);