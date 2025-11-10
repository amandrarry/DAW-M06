// Ejercicio 1.1
console.log("Ejercicio 1.1: Creación de una Matriz");

let inventario = [
    ["Manzanas", 10, 2.5],
    ["Naranjas", 5, 3.0],
    ["Plátanos", 8, 1.5]
];

console.log("Matriz inventario creada:", inventario);

// Ejercicio 1.2
console.log("\nEjercicio 1.2: Acceso y Modificación Matricial");

// Acceder al nombre y precio del producto en la segunda fila
let nombreProducto = inventario[1][0];
let precioProducto = inventario[1][2];

console.log("Nombre del producto en la segunda fila:", nombreProducto);
console.log("Precio del producto en la segunda fila:", precioProducto);

// Número total de filas y elementos de la primera fila
let totalFilas = inventario.length;
let elementosPrimeraFila = inventario[0].length;

console.log("Número total de filas en la matriz:", totalFilas);
console.log("Número de elementos en la primera fila:", elementosPrimeraFila);

// Ejercicio 1.3
console.log("\nEjercicio 1.3: Recorrido Simple");

for (let i = 0; i < inventario.length; i++) {
    console.log("Nombre del producto:", inventario[i][0]);
}


// Ejercicio 2.1
console.log("\nEjercicio 2.1: Función para Cálculo de Inventario");

function calcularValorTotal(matriz) {
    console.log("Función invocada: calcularValorTotal con argumento:", matriz);
    let total = 0;
    for (let i = 0; i < matriz.length; i++) {
        total += matriz[i][1] * matriz[i][2]; // cantidad * precio
    }
    return total;
}

let valorTotal = calcularValorTotal(inventario);
console.log("Resultado de calcularValorTotal:", valorTotal);

// Ejercicio 2.2
console.log("\nEjercicio 2.2: Funciones Anónimas para ordenar por precio");

let ordenarPorPrecio = function(a, b) {
    return a[2] - b[2]; // comparar por precio
};

console.log("Función anónima asignada a variable ordenarPorPrecio:", ordenarPorPrecio);

// Ordenamos la matriz inventario usando sort y la función anónima
inventario.sort(ordenarPorPrecio);
console.log("Matriz inventario ordenada por precio ascendente:", inventario);


