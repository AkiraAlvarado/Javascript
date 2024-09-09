let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
  if (pagina < 1000) {
    pagina += 1;
    cargarPeliculas();
  }
});

btnAnterior.addEventListener('click', () => {
  if (pagina > 1) {
    pagina -= 1;
    cargarPeliculas();
  }
});



// Se conectara a la api, obtendra arregloPeliculas y las pondra en el contenedor html
const cargarPeliculas = async () => {
  try {
    const key = `?api_key=fd55fe51bd118b4f0a802fd962818faf&language=es-ES`
    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/upcoming${key}`)

    if (respuesta.status === 200) {
      const datos = await respuesta.json()
      console.log(datos)

      let arregloPeliculas = ''
      datos.results.forEach(pelicula => {
        arregloPeliculas += `
        <div class="pelicula">
          <img class="poster" src=https://image.tmdb.org/t/p/w500/${pelicula.poster_path}>
          <h3>${pelicula.title}</h3>
        </div> 
       `
      });
      document.getElementById('contenedor').innerHTML = arregloPeliculas

    } else if (respuesta.status === 404) {
      console.log('La pelicula que buscas no existe')
    } else {
      console.log("Hubo un error pero no sabemos que paso")
    }


  }
  catch (error) {
    console.log(error)
  }
  // fetch('fd55fe51bd118b4f0a802fd962818faf')
  //   .then(response => response.json())
  //   .then(respuesta => console.log(respuesta))
}

cargarPeliculas()

