export function calcularHorasTrabajadas(horaEntrada, horaSalida) {
    const entrada = new Date(horaEntrada);
    const salida = new Date(horaSalida);

    if ((salida - entrada) > (24 * 60 * 60 * 1000)) {
        return 'El tiempo trabajado no puede exceder las 24 horas.';
    }

    const diferencia = new Date(salida - entrada);
    const horas = diferencia.getUTCHours();
    const minutos = diferencia.getUTCMinutes();
    const segundos = diferencia.getUTCSeconds();

    return `${horas} horas, ${minutos} minutos y ${segundos} segundos`;
}

export function calcularHorasTotales(trabajadores) {
    let totalMinutos = 0;

    trabajadores.forEach(trabajador => {
        const [horas, minutos] = trabajador.split(':').map(Number);
        totalMinutos += horas * 60 + minutos;
    });

    const totalHoras = Math.floor(totalMinutos / 60);
    const minutosRestantes = totalMinutos % 60;

    return `${totalHoras} horas y ${minutosRestantes} minutos`;
}
