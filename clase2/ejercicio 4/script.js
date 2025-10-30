alert("Bienvenido a la página");
console.log("Tamaño de la ventana:", window.innerWidth, "x", window.innerHeight);

let nombre = prompt("¿Cómo te llamas?");
document.getElementById("mensaje").textContent = "Hola " + nombre;

let nuevaVentana;

function abrirVentana() {
  nuevaVentana = window.open("https://www.google.com", "Nueva ventana", "width=400,height=400");
}

function cerrarVentana() {
  if (nuevaVentana && confirm("¿Quieres cerrar la ventana abierta?")) {
    nuevaVentana.close();
  }
}
