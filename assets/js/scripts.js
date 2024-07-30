import { nombreDelDiaSegunFecha, calcularEdad, calcularMesesAbsolutos, calcularDias, calcularDiasHastaCumple, mostrarHoraActual } from './utils.js';
import { calcularPermanencia } from './permanencia.js';
import { calcularHorasTrabajadas, calcularHorasTotales } from './horasTrabajadas.js';

window.mostrarInformacionNacimiento = function () {
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const { edad, meses, dias } = calcularEdad(fechaNacimiento);
    const mesesAbsolutos = calcularMesesAbsolutos(fechaNacimiento);
    const totalDias = calcularDias(fechaNacimiento);
    const diasCumple = calcularDiasHastaCumple(fechaNacimiento);
    const horaActual = mostrarHoraActual();
    const diaSemana = nombreDelDiaSegunFecha(fechaNacimiento);

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <p>El día que nació fue: ${diaSemana}</p>
        <p>Su edad es: ${edad} años, ${meses} meses y ${dias} días</p>
        <p>La cantidad de meses que tiene son: ${mesesAbsolutos} meses</p>
        <p>La cantidad de días que tiene son: ${totalDias} días</p>
        <p>${diasCumple}</p>
        <p>La hora en que ha realizado su consulta es: ${horaActual}</p>
    `;
};

window.mostrarPermanencia = function () {
    const fechaIngreso = document.getElementById('fechaIngreso').value;
    const permanencia = calcularPermanencia(fechaIngreso);

    const resultadosDiv = document.getElementById('resultadosPermanencia');
    resultadosDiv.innerHTML = `
        <p>Su permanencia en la organización es de: ${permanencia.totalDias} días</p>
        <p>Su permanencia en la organización es de: ${permanencia.totalMeses} meses</p>
        <p>Su permanencia en la organización es de: ${permanencia.anios} años, ${permanencia.meses} meses y ${permanencia.dias} días</p>
    `;
};

window.mostrarHorasTrabajadas = function () {
    const horaEntrada = document.getElementById('horaEntrada').value;
    const horaSalida = document.getElementById('horaSalida').value;
    const horasTrabajadas = calcularHorasTrabajadas(horaEntrada, horaSalida);

    const resultadosDiv = document.getElementById('resultadosHoras');
    resultadosDiv.innerHTML = `
        <p>Horas trabajadas: ${horasTrabajadas}</p>
    `;
};

window.mostrarHorasTotales = function () {
    const trabajadores = [
        '08:00', '08:30', '07:45', '09:00', '10:00', '06:30', '08:15', '09:45'
    ];
    const horasTotales = calcularHorasTotales(trabajadores);

    const resultadosDiv = document.getElementById('resultadosHorasTotales');
    resultadosDiv.innerHTML = `
        <p>Total de horas trabajadas por los 8 trabajadores: ${horasTotales}</p>
    `;
};
