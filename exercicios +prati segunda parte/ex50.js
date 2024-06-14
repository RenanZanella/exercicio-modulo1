const prompt = require('prompt-sync')();


let hotel1 = {
    id: 1,
    nome: "Hotel A",
    cidade: "São Paulo",
    quartosTotais: 10,
    quartosDisponiveis: 10
};

let hotel2 = {
    id: 2,
    nome: "Hotel B",
    cidade: "Rio de Janeiro",
    quartosTotais: 15,
    quartosDisponiveis: 15
};

let hotel3 = {
    id: 3,
    nome: "Hotel C",
    cidade: "Salvador",
    quartosTotais: 8,
    quartosDisponiveis: 8
};

let hotel4 = {
    id: 4,
    nome: "Hotel D",
    cidade: "Curitiba",
    quartosTotais: 20,
    quartosDisponiveis: 20
};

let hotel5 = {
    id: 5,
    nome: "Hotel E",
    cidade: "Porto Alegre",
    quartosTotais: 12,
    quartosDisponiveis: 12
};


//reservas feitas 

let reserva1 = { idReserva: 1, idHotel: 1, nomeCliente: "João" };
let reserva2 = { idReserva: 2, idHotel: 1, nomeCliente: "Maria" };
let reserva3 = { idReserva: 3, idHotel: 2, nomeCliente: "Pedro" };
let reserva4 = { idReserva: 4, idHotel: 3, nomeCliente: "Ana" };
let reserva5 = { idReserva: 5, idHotel: 4, nomeCliente: "Lucas" };


let hoteis = [hotel1, hotel2, hotel3, hotel4, hotel5];
let reservas = [reserva1, reserva2, reserva3, reserva4, reserva5];


function adicionarHotel(id, nome, cidade, quartosTotais) {
    let novoHotel = {
        id: id,
        nome: nome,
        cidade: cidade,
        quartosTotais: quartosTotais,
        quartosDisponiveis: quartosTotais
    };

    hoteis.push(novoHotel);
    console.log(`Hotel "${nome}" adicionado com sucesso.`);
}

function buscarHoteisPorCidade(cidade) {
    let hoteisEncontrados = hoteis.filter(hotel => hotel.cidade === cidade);
    if (hoteisEncontrados.length > 0) {
        console.log(`Hotéis disponíveis em ${cidade}:`);
        hoteisEncontrados.forEach(hotel => {
            console.log(`- ${hotel.nome}: ${hotel.quartosDisponiveis} quartos disponíveis`);
        });
    } else {
        console.log(`Não há hotéis disponíveis em ${cidade}.`);
    }
}

function fazerReserva(idReserva, idHotel, nomeCliente) {
    let hotel = hoteis.find(hotel => hotel.id === idHotel);
    if (hotel) {
        if (hotel.quartosDisponiveis > 0) {
            reservas.push({ idReserva: idReserva, idHotel: idHotel, nomeCliente: nomeCliente });
            hotel.quartosDisponiveis--;
            console.log(`Reserva feita para ${nomeCliente} no hotel ${hotel.nome}. Quartos disponíveis agora: ${hotel.quartosDisponiveis}`);
        } else {
            console.log(`Não há quartos disponíveis no hotel ${hotel.nome} para fazer a reserva.`);
        }
    } else {
        console.log(`Hotel com ID ${idHotel} não encontrado.`);
    }
}

function cancelarReserva(idReserva) {
    console.log("Opção selecionada: Cancelar reserva.");
    let reservaIndex = reservas.findIndex(reserva => reserva.idReserva === parseInt(idReserva, 10));
    
    if (reservaIndex !== -1) {
        let reserva = reservas[reservaIndex];
        let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);

        if (hotel) {
            let nomeCliente = reserva.nomeCliente;
            reservas.splice(reservaIndex, 1);
            hotel.quartosDisponiveis++;
            console.log(`Reserva ${idReserva} de ${nomeCliente} cancelada com sucesso.`);
        } else {
            console.log(`Hotel da reserva ${idReserva} não encontrado.`);
        }
    } else {
        console.log(`Reserva com ID ${idReserva} não encontrada.`);
    }
}

function listarReservas() {
    if (reservas.length > 0) {
        console.log("Lista de reservas:");
        reservas.forEach(reserva => {
            let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
            console.log(`- Reserva ${reserva.idReserva}: ${reserva.nomeCliente} no hotel ${hotel.nome}, ${hotel.cidade}`);
        });
    } else {
        console.log("Não há reservas registradas.");
    }
}

function executarEscolha(escolha) {
    if (escolha === 1) {
        listarReservas();
    } else if (escolha === 2) {
        let idReserva = prompt("Digite a ID da reserva que deseja cancelar:");
        cancelarReserva(idReserva);
    } else if (escolha === 3) {
        let idReserva = prompt("Digite o id para a reserva: ");
        let idHotel = prompt("Digite a id do hotel: ");
        let nomeCliente = prompt("Digite seu nome: ");
        fazerReserva(idReserva, idHotel, nomeCliente);
    } else if (escolha === 4) {
        let id = prompt("Digite o id do hotel: ");
        let nome = prompt("Digite o nome: ");
        let cidade = prompt("Digite a cidade: ");
        let quartosTotais = prompt("Digite a quantidade dos quartos:");
        adicionarHotel(id, nome, cidade, quartosTotais)
    } else if (escolha === 5) {
        let cidade = prompt("Digite a cidade para buscar hotéis:");
        buscarHoteisPorCidade(cidade);
    } else if (escolha === 6) {
        console.log("Saindo do sistema...");
    } else {
        console.log("Escolha inválida. Tente novamente.");
    }
}

let escolhaDoUsuario = 0;
while (escolhaDoUsuario !== 6) {
    console.log('------------------')
    escolhaDoUsuario = parseInt(prompt("Digite a ação desejada: \n1 - listar Reservas\n2 - cancelar Reserva\n3 - fazer Reserva\n4 - adicionar Hotel\n5 - buscar Hoteis Por Cidade\n6 - sair  \n-->"));
    console.log('------------------')
    executarEscolha(escolhaDoUsuario);
}
