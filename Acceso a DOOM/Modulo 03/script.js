/* Primer forma NO ES LA MÁS UTILIZADA  */
const agregar = () => {
  // const articulosPasados = document.querySelector(".nuevoArticulo")
  // if(articulosPasados){
  //   articulosPasados.remove()
  // }
  const articulo = document.getElementById("articulos")
  const parrafoNuevo = document.createElement("p")
  parrafoNuevo.classList.add("nuevoArticulo")
  parrafoNuevo.innerText = "Soy un parrafito"
  articulo.appendChild(parrafoNuevo)
  agregarTexto.removeEventListener("click", agregar) // Se utiliza para que cuando se de click 
  // el elemento se elimine, es decir se dara click solo una vez
}

// const agregarTexto=document.getElementById("button")
// agregarTexto.onclick = agregar

/* Cuidado con poner agregar() ya que eso llama a la función 
 Nunca asignamos función con parentesis porque la ejecuta inmediantamente
 Si lo hago sin parentesis solo le paso la dirección de la función y se disparar
 Cuando cumpla el evento en este caso onclick*/

/* SEGUNDA FORMA , LA MÁS USADA EVENT LISTENERS */
// evento nativo de javascript que tu puedes agregar a un elemento o al doom completo a eswcuchar el 
// evento que de el usuario, tu debes especificar

const agregarTexto = document.getElementById("button")
agregarTexto.addEventListener("click", agregar)


/* teoria */

// Eventos del mouse:

// click – cuando el mouse hace click sobre un elemento (los dispositivos touch lo generan con un toque).
// contextmenu – cuando el mouse hace click derecho sobre un elemento.
// mouseover / mouseout – cuando el cursor del mouse ingresa/abandona un elemento.
// mousedown / mouseup – cuando el botón del mouse es presionado/soltado sobre un elemento.
// mousemove – cuando el mouse se mueve.
// Keyup , cuando suelto el teclado , recibe parametro event, y si event.key === enter
// Eventos del teclado:

// keydown / keyup – cuando se presiona/suelta una tecla.
// Eventos del elemento form:

// submit – cuando el visitante envía un <form>.
// focus – cuando el visitante hace foco en un elemento, por ejemplo un <input>.
// Eventos del documento:

// DOMContentLoaded --cuando el HTML es cargado y procesado, el DOM está completamente construido
// Eventos del CSS:

// transitionend – cuando una animación CSS concluye.