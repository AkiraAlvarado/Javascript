import Usuario from "./usuario.js"
export default class Profesor extends Usuario {
  constructor(n, a, c, ac, cd, calificacion) {
    super(n, a, c, ac)
    this.cursosDictados = cd
    this.calificacion = calificacion
  }
  gettipoUsuario() {
    return "profesor"
  }
}