import Usuario from "./usuario.js"
export default class Alumno extends Usuario {
  constructor(n, a, c, ac, cursosTomados) {
    super(n, a, c, ac)
    this.cursosTomados = cursosTomados
  }
  gettipoUsuario() {
    return "alumno"
  }
  getCursos(){
    return this.cursosTomados;
  }
}