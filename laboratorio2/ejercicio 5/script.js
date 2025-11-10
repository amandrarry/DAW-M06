class Alumno {
  constructor(nombre, edad, nota) {
    this.nombre = nombre;
    this.edad = edad;
    this.nota = nota;
  }

  estaAprobado() {
    return this.nota >= 5;
  }

  presentacion() {
    return `Soy ${this.nombre}, tengo ${this.edad} años y mi nota es ${this.nota} (${this.estaAprobado() ? "Aprobado" : "Suspendido"}).`;
  }
}

class AlumnoBecado extends Alumno {
  constructor(nombre, edad, nota, beca) {
    super(nombre, edad, nota);
    this.beca = beca;
  }

  presentacion() {
    return `${super.presentacion()} Tengo una beca de ${this.beca}€ al año.`;
  }
}

// Crear instancias
let a1 = new Alumno("Ana", 20, 7);
let a2 = new Alumno("Luis", 22, 4);
let a3 = new Alumno("Marta", 19, 9);
let b1 = new AlumnoBecado("Pablo", 21, 8, 1200);

console.log(a1.presentacion());
console.log(a2.presentacion());
console.log(a3.presentacion());
console.log(b1.presentacion());
