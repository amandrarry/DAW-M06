// Declaraciones
var x = 10;
let y = 20;
const z = 30;

console.log("Inicial:", x, y, z);

// Reasignaciones
x = 15; // OK
y = 25; // OK
// z = 35; // ❌ Error: const no permite reasignar

console.log("Después de reasignar:", x, y, z);

// Alcance
if (true) {
  var a = "var dentro de bloque";
  let b = "let dentro de bloque";
  const c = "const dentro de bloque";
  console.log("Dentro del bloque:", a, b, c);
}

console.log("Fuera del bloque, var:", a); // existe
// console.log("Fuera del bloque, let:", b); // ❌ no existe
// console.log("Fuera del bloque, const:", c); // ❌ no existe