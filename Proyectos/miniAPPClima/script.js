const result = document.querySelector('.result')
const form = document.querySelector(".get-weather")
const nameCity = document.getElementById("city")
const nameCountry = document.getElementById("country")

form.addEventListener("submit", e => {
  e.preventDefault()

  llamarAPI(nameCity.value, nameCountry.value)
})

const llamarAPI = async (city, country) => {
  const apiKey = '088eee181164c5751c6967dbabfb2029'
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
  console.log(urlApi)
  try {
    const respuesta = await fetch(urlApi)
    const datos = await respuesta.json()
    if (datos.cod === '404 ') {
      alert("Ciudad no encontrada")
    } else {
      limpiarConsola()
      showWeather(datos)
      console.log(datos)
    }
  } catch {
    alert("Pais y lugar no coinciden")
  }

}

const showWeather = datosJSON => {
  const {
    name,
    main: { temp, temp_min, temp_max },
    weather: [arreglo] } = datosJSON

  const degrees = kelvinToCentigrade(temp)
  const min = kelvinToCentigrade(temp_min)
  const max = kelvinToCentigrade(temp_max)

  const section = document.querySelector(".contenido")
  if (section) {
    section.remove()
  }

  const content = document.createElement('div')
  content.classList.add("contenido")
  content.innerHTML = `
        <h5>Clima en ${name}</h5>
        <img src="https://openweathermap.org/img/wn/${arreglo.icon}@2x.png" alt="icon">
        <h2>${degrees}°C</h2>
        <p>Max: ${max}°C</p>
        <p>Min: ${min}°C</p>
    `
  result.appendChild(content)
  console.log(name)
  console.log(temp)
  console.log(temp_min)
  console.log(arreglo.icon)
}

const kelvinToCentigrade = temp => {
  return parseInt(temp - 273.15);
}

const limpiarConsola = () => {
  result.innerHTML = ''
}



const llamarAPI2 = async () => {
  const apiKey = '088eee181164c5751c6967dbabfb2029'
  const urlApi = `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${apiKey}`
  try {
    const respuesta = await fetch(urlApi)
    const datos = await respuesta.json()
    console.log(datos)
  } catch {
    alert("Pasdno coinciden")
  }

}
llamarAPI2()

