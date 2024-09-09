const poster = document.getElementById("poster")
const file = poster.src

const blur = document.getElementById("blur")
blur.style.backgroundImage = `url(${file})`


const ocultarMenu = (menu, boton) =>{
  const menuPrincipal = document.getElementById(menu)
  const botonPrincipal = document.getElementById(boton)

  botonPrincipal.addEventListener('click', ()=>{
    menuPrincipal.classList.toggle('hide')
  })
}

ocultarMenu("main-menu", "button")


{/* <input id = "nombre" type="text">

//CODIGO JS
let input1  = document.getElementById("nombre")
input1.addEventListener(‘input’, () => {
     console.log(input1.value)
}) */}
// Si queremos ejecutar una función cada vez que se tipea sobre el campo, conviene trabajar directamente con el evento input.
