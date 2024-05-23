// Inicializa a biblioteca AOS para animações.
AOS.init();

// Define a data do evento.
const dataDoEvento = new Date("Aug 12, 2024 19:00:00");

// Obtém o timestamp da data do evento.
const timeStampDoEvento = dataDoEvento.getTime();

// Define um intervalo de atualização para o contador de tempo até o evento.
const contaAsHoras = setInterval(function() {
    // Obtém a data e hora atual.
    const agora = new Date();
    // Obtém o timestamp atual.
    const timeStampAtual = agora.getTime();

    // Calcula a distância de tempo até o evento.
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    // Define constantes para representar o tempo em milissegundos.
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    // Calcula o tempo restante em dias, horas, minutos e segundos.
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    // Atualiza o elemento HTML com o contador de tempo restante.
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    // Verifica se o evento já ocorreu.
    if (distanciaAteOEvento < 0) {
        // Limpa o intervalo de atualização do contador.
        clearInterval(contaAsHoras);
        // Atualiza o elemento HTML indicando que o evento expirou.
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000); // Atualiza o contador a cada segundo.
