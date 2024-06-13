const prompt = require('prompt-sync')();

function formatarHorario(horario) {
    return horario.substring(0, 2) + "." + horario.substring(2, 4) + "." + horario.substring(4, 6);
}

let horarios = [];

for (let i = 1; i <= 5; i++) {
    let horario = prompt(`Digite o ${i}º horário no formato HHMMSS:`);;
    horarios.push(formatarHorario(horario));
}

console.log("Horários no formato HH.MM.SS:");
for (let horario of horarios) {
    console.log(horario);
}
