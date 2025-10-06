// Genera un número aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Define número máximo de intentos
const MAX_INTENTOS = 7;
let intento = 1;
let adivinado = false;

alert("He pensado un número entre 1 y 100. ¡Tienes 7 intentos para adivinarlo!");

// Bucle principal
while (intento <= MAX_INTENTOS && !adivinado) {
  let entrada = prompt(`Intento ${intento}/${MAX_INTENTOS}: introduce tu número`);
  let numeroUsuario = Number(entrada);

  // Validación básica
  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
    alert("Por favor, introduce un número válido entre 1 y 100.");
    continue; // No cuenta como intento válido
  }

  // Compara con el número secreto
  if (numeroUsuario === numeroSecreto) {
    alert(`🎉 ¡Correcto! El número era ${numeroSecreto}. Lo adivinaste en ${intento} intento(s).`);
    adivinado = true;
  } else if (numeroUsuario < numeroSecreto) {
    alert("El número secreto es mayor.");
  } else {
    alert("El número secreto es menor.");
  }

  intento++;
}

// Si no lo adivina
if (!adivinado) {
  alert(`❌ Has perdido. El número secreto era ${numeroSecreto}.`);
}

/*
📌 INFORME (en comentarios):
1. Se ha implementado un juego de adivinanza de números utilizando JavaScript.
2. El ordenador genera un número aleatorio entre 1 y 100.
3. El usuario tiene 7 intentos para adivinar el número.
4. Se realizan validaciones para asegurar que la entrada sea un número válido.
5. Se proporciona retroalimentación al usuario si su suposición es demasiado alta o baja.
6. Se informa al usuario si adivina correctamente o si se queda sin intentos.
*/