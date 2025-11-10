let entrada = prompt("Introduce tu fecha de nacimiento (DD/MM/AAAA):");
let regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

if (!regex.test(entrada)) {
  alert("Formato inválido. Usa DD/MM/AAAA.");
} else {
  let [_, dia, mes, anio] = entrada.match(regex);
  let fecha = new Date(`${anio}-${mes}-${dia}`);
  
  let hoy = new Date();
  let edad = hoy.getFullYear() - fecha.getFullYear();
  if (
    hoy.getMonth() < fecha.getMonth() ||
    (hoy.getMonth() === fecha.getMonth() && hoy.getDate() < fecha.getDate())
  ) {
    edad--;
  }

  let diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  let diaSemana = diasSemana[fecha.getDay()];

  alert(`Naciste el ${entrada}, tienes ${edad} años.`);
  alert(`Caía en ${diaSemana}.`);
}
