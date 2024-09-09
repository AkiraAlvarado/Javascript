import Curso from "./Clases/curso.js"
import Profesor from "./Clases/profesor.js"
import Alumno from "./Clases/alumno.js"

// El inner nos permite poner un elemento al HTML
const element = document.getElementById("curso")

// La funcion mostrar curso crea un hijo  
function mostrarCurso(curso) {
  // El hijo se crea un div para que se pueda agregar así al html
  const hijo = document.createElement("div")
  hijo.classList.add("card") //Agregamos la clase Card al Hijo
  // Al hijo se agrega contenido
  hijo.innerHTML = `

  <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src="${curso.getPoster()}" alt="${curso.getNombre()}">
  </div>

  <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}<h3/>
    <div class="s-center">
        <span class="small"> # Clases: ${curso.getClases()}</span>
    </div>
  </div>
  
  `
  // Al final el hijo se agrega al Padre que es parte del HTML
  element.appendChild(hijo)

}

const formulario = document.getElementById("formCursos")

formulario.addEventListener("submit", (e) /* e es un evento*/ => {
  e.preventDefault()
  const target = e.target // Almacena todo el forms
  console.log(target.nombreCurso.value) // Obtenemos el valor de cada campo que stabaa en input (HTML desde cero)
  console.log(target.posterCurso.value) // HTTPS
  console.log(target.clasesCurso.value) // 4

  // Hacemos el objeto con los datos obtenidos del forms en el html
  const curso = new Curso(target.nombreCurso.value, target.posterCurso.value, target.clasesCurso.value)
  mostrarCurso(curso)
})


//CAMBIO
const formularioUsuario = document.getElementById("formUsuario");
const clase = document.getElementById("clase");

// Escuchar cambios en el tipo de usuario (profesor/alumno)
const tipoUsuarioSelect = formularioUsuario.querySelector('select[name="tipoUsuario"]');

tipoUsuarioSelect.addEventListener("change", (e) => {
  const tipoUsuario = e.target.value;

  // Eliminamos los campos adicionales anteriores si es que existen 
  // Se refiere a que si pasamos de alumno a profesor, de profesor a alumno y así sucesivamente
  // Se pueden crear demasiados campos
  const camposAdicionales = clase.querySelector('.campos-adicionales');
  if (camposAdicionales) {
    camposAdicionales.remove();
  }

  // Creamos nuevos campos adicionales según el tipo de usuario seleccionado
  const nuevosCampos = document.createElement("div");
  nuevosCampos.classList.add("campos-adicionales", "ed-grid", "m-grid-2");

  if (tipoUsuario === "profesor") {
    nuevosCampos.innerHTML = `
      <div class="form-item">
        <label>
          Cursos Dictados
          <input type="number" name="cursosDictados">
        </label>
      </div>
      <div class="form-item">
        <label>
          Calificación
          <input type="number" name="cursosCalificacion">
        </label>
      </div>
    `;
  } else if (tipoUsuario === "alumno") {
    nuevosCampos.innerHTML = `
      <div class="form-item">
        <label>
          Cursos Tomados
          <input type="number" name="cursosTomados">
        </label>
      </div>
    `;
  }

  // Agregar nuevos campos adicionales al contenedor
  clase.appendChild(nuevosCampos);
});



const element2 = document.getElementById("usuario")

function mostrarUsuario(usuario) {
  // El hijo es de forma de div
  const hijo = document.createElement("div")
  // Al hijo se agrega contenido
  if (usuario.gettipoUsuario() === "profesor") {
    hijo.innerHTML = `
  <table border="1">
    <tr>
      <th>Nombre</th>
      <td>${usuario.getNombres()}</td>
    </tr>
    <tr>
      <th>Apellido</th>
      <td>${usuario.getApellidos()}</td>
    </tr>
    <tr>
      <th>Correo</th>
      <td>${usuario.getCorreo()}</td>
    </tr>
    <tr>
      <th>tipo de Usuario</th>
      <td>${usuario.gettipoUsuario()}</td>
    </tr>
  `} else if (usuario.gettipoUsuario() === "alumno") {
    hijo.innerHTML = `
    <table border="1">
      <tr>
        <th>Nombre</th>
        <td>${usuario.getNombres()}</td>
      </tr>
      <tr>
        <th>Correo</th>
        <td>${usuario.getCorreo()}</td>
      </tr>
      <tr>
        <th>tipo de Usuario</th>
        <td>${usuario.gettipoUsuario()}</td>
      </tr>
      <tr>
        <th>curso tomados</th>
        <td>${usuario.getCursos()}</td>
      </tr>
    `
  }
  // Al final el hijo se agrega al Padre , element de forma de div al id curso
  element2.appendChild(hijo)
}


formularioUsuario.addEventListener("submit", (e) => {
  e.preventDefault();

  const target = e.target; // const target se utiliza para acceder a los valores del formulario, e.target se refiere al event desencadenante
  const tipoUsuario = target.tipoUsuario.value;

  if (tipoUsuario === "profesor") {
    const profesor = new Profesor(target.usuarioNombre.value, target.usuarioApellido.value, target.usuarioCorreo.value, true, target.cursosDictados.value, target.cursosCalificacion.value)
    mostrarUsuario(profesor)
  } else if (tipoUsuario === "alumno") {
    const alumno = new Alumno(target.usuarioNombre.value, target.usuarioApellido.value, target.usuarioCorreo.value, true, target.cursosTomados.value)
    mostrarUsuario(alumno)
  }


  // Aquí podrías realizar otras operaciones con los valores obtenidos, como enviarlos a un servidor, procesarlos, etc.
});


// Para cursos
// 1.- Se agrega campos dependiendo si es alumno o profesor
// 2.- Se crea la función mostrar Usuario que muestra ciertos campos dependiendo de lo que tenga con un if
// Que obtiene datos de un select con option, recibe como parametro un objeto
// 3.- Se crea una función que construye el objeto 