// Funcion constructora
// Funcion que nos permita construir muchos objetos en base a un model

// function Usuario(nombres, apellidos, correo, activo) {
//   this.nombres = nombres,
//     this.apellidos = apellidos,
//     this.correo = correo,
//     this.activo = activo
// }

// let a = new Usuario("Beto", "Quiroga", "Correo", true)
// console.log(a)

// Clases  
// Se tiene adentro de clases el metodo constructor
class Usuario {
  constructor(nombres, apellidos, correo, activo) {
    this.nombres = nombres,
      this.apellidos = apellidos,
      this.correo = correo,
      this.activo = activo
  }
  presentarse() {
    return `Hola mi correo es ${this.correo}` // Por buena practica se usa returno y no console.log
  }
  // Metodos getters y setters
  // Get -> Obtener valores, por ejemplo apellidos, se especifica para cada campo
  // Set -> Cambia valores, por ejemplo apellidos, se especifica para cada campo

  getApellidos() {
    return this.apellidos //Con esto hago que el atributo apellidos sea acesible,
    // ya que normalmente seria privados
  }
  setApellidos(nuevosApellidos) {
    this.apellidos = nuevosApellidos
  }
}

let a = new Usuario("Beto", "Quiroga", "Correo", true)
console.log(a)
console.log(a.presentarse())
a.setApellidos("Maria")
console.log(a.getApellidos())

// Si quisieramos un suario para profesor y otro alumno, tendriamos que crear varios moldes
// Para ello usaremos herencia

class Profesor extends Usuario {
  constructor(nombres, apellidos, correo, activo, cursosDictados) {
    super(nombres, apellidos, correo, activo)
    this.cursosDictados = cursosDictados
  }
}

class Alumno extends Usuario {
  constructor(nombres, apellidos, correo, activo, cursosTomados) {
    super(nombres, apellidos, correo, activo)
    this.cursosTomados = cursosTomados
  }
}