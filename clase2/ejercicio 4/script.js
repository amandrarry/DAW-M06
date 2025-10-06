// 1️⃣ Mostrar el tamaño actual de la ventana
console.log("Tamaño de la ventana:", window.innerWidth, "x", window.innerHeight);

// 2️⃣ Mostrar alert de bienvenida al cargar la página
alert("👋 Bienvenido/a a la página de prueba con el objeto window");

// 3️⃣ Preguntar nombre con prompt() y mostrarlo en el documento
let nombre = prompt("¿Cómo te llamas?");
if (nombre) {
  document.getElementById("mensaje").innerHTML = `Hola, <strong>${nombre}</strong> 👋`;
} else {
  document.getElementById("mensaje").textContent = "No introdujiste tu nombre.";
}

// 4️⃣ Función para abrir nueva ventana
let nuevaVentana;

function abrirVentana() {
  // Abre una nueva ventana de 500x400 píxeles
  nuevaVentana = window.open(
    "https://www.wikipedia.org",
    "VentanaNueva",
    "width=500,height=400"
  );

  if (nuevaVentana) {
    alert("Se ha abierto una nueva ventana con Wikipedia.");
  } else {
    alert("⚠️ El navegador ha bloqueado la ventana emergente. Habilita las pop-ups para probarlo.");
  }
}

// 5️⃣ Función para cerrar la ventana si el usuario lo confirma
function cerrarVentana() {
  if (nuevaVentana && !nuevaVentana.closed) {
    let confirmar = confirm("¿Quieres cerrar la ventana abierta?");
    if (confirmar) {
      nuevaVentana.close();
      alert("La ventana se ha cerrado correctamente.");
    }
  } else {
    alert("No hay ninguna ventana abierta.");
  }
}
