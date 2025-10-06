// ==============================
// Clase base: Alumno
// ==============================
class Alumno {
  constructor(nombre, edad, nota) {
    this.nombre = nombre;
    this.edad = edad;
    this.nota = nota;
  }

  // Método que devuelve true si la nota es >= 5
  estaAprobado() {
    return this.nota >= 5;
  }

  // Método que devuelve una descripción del alumno
  presentacion() {
    let estado = this.estaAprobado() ? "Aprobado" : "Suspendido";
    return `Soy ${this.nombre}, tengo ${this.edad} años y mi nota es ${this.nota} (${estado}).`;
  }
}

// ==============================
// Clase hija: AlumnoBecado
// ==============================
class AlumnoBecado extends Alumno {
  constructor(nombre, edad, nota, beca) {
    super(nombre, edad, nota); // Llama al constructor de la clase padre
    this.beca = beca;
  }

  // Sobrescribimos el método presentacion()
  presentacion() {
    let base = super.presentacion();
    return `${base} Tengo una beca de ${this.beca} € al año.`;
  }
}

// ==============================
// Creación de instancias
// ==============================
let alumno1 = new Alumno("Ana", 20, 7);
let alumno2 = new Alumno("Luis", 22, 4);
let alumno3 = new Alumno("Marta", 19, 9);
let becado1 = new AlumnoBecado("Pablo", 21, 8, 1200);

// ==============================
// Mostrar resultados en consola
// ==============================
console.log(alumno1.presentacion());
console.log(alumno2.presentacion());
console.log(alumno3.presentacion());
console.log(becado1.presentacion());

// Extra: recorrerlos en un array
let alumnos = [alumno1, alumno2, alumno3, becado1];
console.log("=== Listado general de alumnos ===");
alumnos.forEach(al => console.log(al.presentacion()));
