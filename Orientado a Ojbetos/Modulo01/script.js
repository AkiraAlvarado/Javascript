// Objetos literales
const alumno = {
  // Atributos
  nombres: 'Beto Quiroga',
  apellidos: 'Quiroga M.',
  edad: 29,
  padre: {
    nombre: 'Hector Avila',
    edad: 62
  }, // Puede de teenr atribut otro objeto
  // Metodos
  presentarse () {
    console.log(`Hola, mi nombre es ${this.nombres} ${this.apellidos}`)
  },
  whoIsYourFather () {
    console.log(`Mi padre es ${this.padre.nombre}`)
  }
  // Usamos this por benas practicas
}
// Los objetos , su estructura no puede ser modificada , pero sus atributos si
// Los atributos y sus valores pueden tener otro valor

// Además se pueden asignar nuevos atributos mediante algunos metodos
alumno.genero = 'Masculino'

alumno.presentarse()
alumno.whoIsYourFather()
