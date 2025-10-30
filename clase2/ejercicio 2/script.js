let secreto = Math.floor(Math.random() * 100) + 1;
let intentos = 7;
let acertado = false;

while (intentos > 0 && !acertado) {
  let entrada = prompt(`Adivina el número (1-100). Te quedan ${intentos} intentos:`);
  let numero = Number(entrada);

  if (numero === secreto) {
    alert(`¡Correcto! Lo lograste en ${8 - intentos} intentos.`);
    acertado = true;
  } else if (numero < secreto) {
    alert("El número secreto es mayor.");
  } else {
    alert("El número secreto es menor.");
  }

  intentos--;
}

if (!acertado) {
  alert(`Has perdido. El número era ${secreto}.`);
}
