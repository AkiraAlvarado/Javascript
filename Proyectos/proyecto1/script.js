const $days = document.getElementById('days'),
  $hours = document.getElementById('hours'),
  $minutes = document.getElementById('minutes'),
  $seconds = document.getElementById('seconds'),
  $finalMesagge = document.querySelector('.final-mensaje')

// Fecha a futuro
const countdownDate = new Date('Dec 25, 2024 00:00:00').getTime() // Obtiene el tiempo de esa fecha

const interval = setInterval(() => {
  // Obtener fecha actual y milisegundos
  const now = new Date().getTime() // Obtiene el tiempo actual

  //Obtenemos la distancia entre ambas fechas
  let distance = countdownDate - now

  //Calculo a días horas minutos y segundos
  let days = Math.floor(distance / (1000 * 60 * 60 * 24)) // El valor en días, decimales nos dara
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((distance % (1000 * 60)) / (1000))

  //Escribimos resultados

  $days.textContent = days
  $hours.textContent = hours
  $minutes.textContent = minutes
  $seconds.textContent = ('0' + seconds).slice(-2)

}, 1000)

// Logica para cambiar de paginas
// La clase active tiene un display : block para que se pueda ver, todas las demas secciones tienen por defecto NONE
const buttons = document.querySelectorAll(".btn")
const section = document.querySelectorAll(".section")
buttons.forEach(boton => {
  boton.addEventListener("click", () => {
    const atributo = boton.getAttribute("page")

    section.forEach(pages => pages.classList.remove("active")) // Remueve a cualquier pagina que estaba activa antes, su clase active , para que pase a none
    document.getElementById(`section-${atributo}`).classList.add("active")
  })
  section[0].classList.add('active'); //Se da por defecto la clase Active a la primera seccion
})

// Para la segunda pagina

let hr = min = sec = ms = "0" + 0, startTimer; // Se inicializa en 00 para que se considere 
const startBtn = document.querySelector(".start"),
  stopBtn = document.querySelector(".stop")
resetBtn = document.querySelector(".reset")

startBtn.addEventListener("click", () => {
  startTimer = setInterval(() => {
    ms++ // Cada 10 milisegundos, aqui aumenta 1 , 
    // Es decir en 1000 milisegundos, ms habra llegado a 100 , que equivaldria a 1segundo
    ms = ms < 10 ? "0" + ms : ms
    if (ms == 100) {
      sec++
      sec = sec < 10 ? "0" + sec : sec
      ms = "0" + 0
    }
    if (sec == 60) {
      min++
      min = min < 10 ? "0" + min : min
      sec = "0" + 0
    }
    if (min == 60) {
      hr++
      hr = hr < 10 ? "0" + hr : hr
      min = "0" + 0
    }
    putValue()
  }, 10)
})

stopBtn.addEventListener("click", () => {
  clearInterval(startTimer) // Detiene el intervalo , o contador en este caso
})

resetBtn.addEventListener("click", () => {
  clearInterval(startTimer) // Detiene el intervalo , o contador en este caso
  hr = min = sec = ms = "0" + 0 // Setea todo en 0 de nuevo
  putValue()
})


// Esta función se utiliza para actualizar los elementos HTML que muestran los
// milisegundos, segundos, minutos y horas del cronómetro. Selecciona cada elemento por su clase y 
// actualiza su contenido (innerHTML) con los valores actuales de ms, sec, min y hr.
function putValue() {
  document.querySelector(".millisecond").innerHTML = ms
  document.querySelector(".second").innerHTML = sec
  document.querySelector(".minute").innerHTML = min
  document.querySelector(".hour").innerHTML = hr
}