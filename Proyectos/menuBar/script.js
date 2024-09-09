const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

const list = document.querySelectorAll(".list");
list.forEach(boton => {
  boton.addEventListener("click", () => {
    list.forEach(botonNoUsado => {
      botonNoUsado.classList.remove("active");
    }); // Hace un recorrido y quita a todos los botones la clase active
    boton.classList.add("active"); // Con esto agrega la clase al boton
  });
});