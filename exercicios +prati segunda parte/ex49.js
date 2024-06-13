function agruparTransacoesPorCategoria(transacoes) {
    let categorias = {};

    transacoes.forEach((transacao) => {
        let categoria = transacao.categoria;

        if (!categorias[categoria]) {
            categorias[categoria] = {
                transacoes: [],
                subtotal: 0
            };
        }

        categorias[categoria].transacoes.push(transacao);
        categorias[categoria].subtotal += transacao.valor;
    });

    return categorias;
}

let transacoes = [
    { id: 1, valor: 50, data: '2024-06-01', categoria: 'Alimentação' },
    { id: 2, valor: 80, data: '2024-06-02', categoria: 'Transporte' },
    { id: 3, valor: 120, data: '2024-06-03', categoria: 'Alimentação' },
    { id: 4, valor: 40, data: '2024-06-04', categoria: 'Lazer' },
    { id: 5, valor: 60, data: '2024-06-05', categoria: 'Transporte' },
    { id: 6, valor: 90, data: '2024-06-06', categoria: 'Alimentação' },
    { id: 7, valor: 30, data: '2024-06-07', categoria: 'Lazer' },
    { id: 8, valor: 100, data: '2024-06-08', categoria: 'Alimentação' },
    { id: 9, valor: 70, data: '2024-06-09', categoria: 'Transporte' },
    { id: 10, valor: 50, data: '2024-06-10', categoria: 'Alimentação' },
    { id: 11, valor: 20, data: '2024-06-11', categoria: 'Alimentação' },
    { id: 12, valor: 150, data: '2024-06-05', categoria: 'Alimentação' },
];

let transacoesPorCategoria = agruparTransacoesPorCategoria(transacoes);

console.dir(transacoesPorCategoria, { depth: null });
