// Solicitar la fecha de nacimiento
let entrada = prompt("Introduce tu fecha de nacimiento (DD/MM/AAAA):");

// Expresión regular para validar el formato
const regex = /^([0-2][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

// Validación de formato
if (!regex.test(entrada)) {
  alert("Formato inválido. Asegúrate de usar DD/MM/AAAA, por ejemplo 15/09/2000.");
} else {
  // Extraer partes de la fecha con grupos capturados
  let [_, dia, mes, anio] = entrada.match(regex);

  // Crear objeto Date (recordar: meses van de 0 a 11)
  let fechaNacimiento = new Date(`${anio}-${mes}-${dia}`);

  // Fecha actual
  let hoy = new Date();

  // Calcular edad en años cumplidos
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

  // Ajustar si aún no ha cumplido años este año
  if (
    hoy.getMonth() < fechaNacimiento.getMonth() ||
    (hoy.getMonth() === fechaNacimiento.getMonth() &&
      hoy.getDate() < fechaNacimiento.getDate())
  ) {
    edad--;
  }

  // Día de la semana
  const diasSemana = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado"
  ];
  let diaSemana = diasSemana[fechaNacimiento.getDay()];

  // Mostrar resultado
  alert(`Naciste el ${entrada}, tienes ${edad} años.`);
  alert(`Caías en ${diaSemana}.`);
}
