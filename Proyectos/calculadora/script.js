
const pantalla = document.querySelector(".pantalla"); // Obtenemos la clase de Pantalla , donde se escribiran los numeros
const botones = document.querySelectorAll(".btn"); // Obtenemos un array con todos los botones

botones.forEach(boton /* De cada boton */ => {
  /*Se agregara un escuchador de eventos */boton.addEventListener("click", () => {
  const botonApretado = boton.textContent //Traemos el contenido textual y lo guardamos en boton apretado
  // Se suma el contenido mientras apretamos botons
  if (boton.id === "c") {
    pantalla.textContent = "0"
    return// Acaba el if justo aqui, no ejecuta lo de abajo
  }

  if (boton.id === "borrar") {
    if (pantalla.textContent.length === 1) { // Si la longitud de la pantalla es 1 , se setea en 0 
      pantalla.textContent = "0"
    } else if (pantalla.textContent === "Error") { // Si la pantalla esta en error se setea en 0
      pantalla.textContent = "0"
    } else {
      pantalla.textContent = pantalla.textContent.slice(0, -1) // Divide el string en 2 , y borra la ultima posición
    }
    return
  }

  if (boton.id === "igual") {
    // Se intenta con el Try , y en caso algo salga mal , el catch dara error en pantalla
    try {
      pantalla.textContent = eval(pantalla.textContent)
      if (pantalla.textContent.length > 10) {
        pantalla.textContent = parseFloat(eval(pantalla.textContent).toFixed(9));
      }
    } catch {
      pantalla.textContent = "Error";
    }
    return
  }


  if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
    pantalla.textContent = botonApretado // Si el textcontent es SOLO 0 , se cambiara por el valor que apretemos, esto se hace para eliminar el 0 inicial de la pantalla
    console.log(2)
  } else {
    pantalla.textContent += botonApretado // Se pondra para concatenar el texto
    console.log(1)
  }
})
})