// === HOISTING ===
// Con var: la declaración se "eleva" pero no la asignación
console.log(x); // undefined (la variable existe, pero aún no tiene valor)
// console.log(y); // ❌ ReferenceError (no existe todavía)
// console.log(z); // ❌ ReferenceError (no existe todavía)

var x = 1;
let y = 2;
const z = 3;

console.log("x =", x, "y =", y, "z =", z);

// === ALCANCE DE FUNCIÓN ===
function pruebaFuncion() {
  var a = "var dentro de función";
  let b = "let dentro de función";
  const c = "const dentro de función";
  console.log("Dentro de la función:", a, b, c);
}
pruebaFuncion();
// console.log(a, b, c); // ❌ no accesibles fuera de la función

// === ALCANCE DE BLOQUE ===
if (true) {
  var m = "var dentro de bloque";
  let n = "let dentro de bloque";
  const o = "const dentro de bloque";
  console.log("Dentro del bloque:", m, n, o);
}

console.log("Fuera del bloque m:", m); // ✅ existe porque var no respeta el bloque
// console.log(n, o); // ❌ ReferenceError: let y const solo existen dentro del bloque

// === REDECLARACIÓN ===
var redeclaracion = "primer valor con var";
var redeclaracion = "segundo valor con var"; // ✅ permitido
console.log("Redeclaración con var:", redeclaracion);

// let redeclaracionLet = "primer valor con let";
// let redeclaracionLet = "segundo valor con let"; // ❌ SyntaxError

// const redeclaracionConst = "primer valor con const";
// const redeclaracionConst = "segundo valor con const"; // ❌ SyntaxError

// === CONST Y MUTABILIDAD ===
const PI = 3.14;
// PI = 3.1416; // ❌ no se puede reasignar

const numeros = [1, 2, 3];
numeros.push(4); // ✅ se puede mutar el contenido del array
console.log("Array mutado con const:", numeros);

const persona = { nombre: "Ana", edad: 20 };
persona.edad = 21; // ✅ se puede cambiar una propiedad
console.log("Objeto mutado con const:", persona);

// 📌 INFORME (en comentarios):
// 1. Hoisting: con var, la declaración se eleva (se crea al inicio con valor undefined).
//    Con let y const no hay hoisting: no se puede acceder antes de declarar.
// 2. Alcance: var tiene alcance de función, no de bloque.
//    let y const respetan el bloque en el que se definen.
// 3. Const: no permite reasignación de la variable completa,
//    pero sí se pueden mutar los elementos internos de arrays y objetos.
