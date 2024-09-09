window.innerHeight = "Nos devuelve el Alto"
window.innerWidth = "Nos devuelve el Ancho"
window.location.replace("Aqui va el href de la pag. es buena practica usar un metodo")
prompt("Ingrese tu edad")
confirm("Se eliminara  tu perfil") // Devuelve True o Flase
// Los pop ups son ventanas emergentes que salen como mensajes

/* Timeout o tiempo muerto */
const saludar  = () =>{
  console.log("Hola")
}
setTimeout(()=> {alert("Hola Edteam")}, 3000) //Tendra que pasar 3s para que se ejecute la función
setInterval(()=> {alert("Hola Edteam")}, 3000) //Cada 3s se ejecutara esa función
// Para limpiar ese intervalo tenemos clearInterval() , la buena practica es la siguiente

const elQuesaluda = setInterval(saludar,2000)
clearInterval(elQuesaluda)

// Screen normalmente se utiliza para detectar si hay un cambio en pantalla , normalmente en celulares
// Window y const newWindow = window.open("https//Ed.team") , en este caso esta nueva ventana aparte se debe trabajar aparte
// newWindow es un objeto de tipo global

// newWindow.focus() genera un foco en la nueva ventana