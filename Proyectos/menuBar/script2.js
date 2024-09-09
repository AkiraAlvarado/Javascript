// const buttonNav = document.querySelectorAll(".main-nav__item")
// const toggle = document.querySelector(".menuToggle")
// const header = document.querySelector(".header")
// const nav2 = document.querySelector(".mostrar")
// buttonNav.forEach(element => {

//   element.addEventListener("click", () => {
//     buttonNav.forEach(buttonDisable => {
//       buttonDisable.classList.remove("active")
//     })
//     element.classList.toggle("active")
//   })
// })

// toggle.addEventListener("click", () => {
//   header.classList.toggle("open")
//   console.log("click")
// })

// nav2.addEventListener("click", () => {
//   header.classList.toggle("ver")
//   header.classList.toggle("open")
// })


// Selecciona los elementos
const buttonNav = document.querySelectorAll(".main-nav__item");
const toggle = document.querySelector(".menuToggle");
const header = document.querySelector(".header");
const nav2 = document.querySelector(".mostrar");

// Función para manejar el cambio de clase basado en la media query
function handleToggle() {
  if (window.matchMedia("(max-width: 1000px)").matches) {
    header.classList.toggle("ver");
  }
  header.classList.toggle("open");
}

// Agrega los eventos de clic a los botones de navegación
buttonNav.forEach(element => {
  element.addEventListener("click", () => {
    buttonNav.forEach(buttonDisable => {
      buttonDisable.classList.remove("active");
    });
    element.classList.toggle("active");
  });
});

// Agrega el evento de clic al botón de menú
toggle.addEventListener("click", () => {
  handleToggle();
  console.log("click");
});

// Agrega el evento de clic al nav2
nav2.addEventListener("click", () => {
  handleToggle();
});