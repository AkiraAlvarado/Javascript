// const header = document.querySelector("header");
// const section = document.querySelector("section");

// // Para crear una solicitud, se necesita crear una nueva instancia de objeto de solicitud desde el constructor XMLHttpRequest, utilizando la palabra clave new. 
// const request = new XMLHttpRequest();

// //se debe almacenar la URL del JSON o RUTA que se quiere recuperar en una variable
// const requestURL = 'datos.json';

// //  abrir una nueva solicitud utilizando el método  OPEN
// request.open("GET", requestURL);

// //Luego, agregue las siguientes dos lineas — establecemos el responseType 
// // a JSON, de esta forma ese XHR sabe que el servidor estará retornando JSON  
// // y que esto debería ser convertido en segundo plano en un 
// request.responseType = "json";

// // objeto JavaScript.Entonces se envía la solicitud con el método send()
// request.send();

// // La última parte de esta sección comprende la espera por la respuesta a retornar 
// // desde el servidor y luego, manejarla. Agregue el siguiente código bajo el código 

// request.onload = function () {
//   const superHeroes = request.response;
//   populateHeader(superHeroes);
//   showHeroes(superHeroes);
// };

// // AQUI SE USARAN LAS FUNCIONES ANTERIORMENTE REFERENCIAS -------------------------------


// const populateHeader = jsonObj => {
//   const myH1 = document.createElement("h1");
//   myH1.textContent = jsonObj["squadName"];
//   header.appendChild(myH1);

//   const myPara = document.createElement("p");
//   myPara.textContent =
//     // Recordar que hay 2 maneras de hacerlo
//     `Hometown: ${jsonObj["homeTown"]} // FormedD: ${jsonObj["formed"]} `
//   "Hometown: " + jsonObj["homeTown"] + " // Formed2: " + jsonObj["formed"];
//   header.appendChild(myPara);
// }

// // crea y muestra las tarjetas de los superhéroes:

// function showHeroes(jsonObj) {
//   const heroes = jsonObj["members"];

//   for (var i = 0; i < heroes.length; i++) {
//     const myArticle = document.createElement("article");
//     const myH2 = document.createElement("h2");
//     const myPara1 = document.createElement("p");
//     const myPara2 = document.createElement("p");
//     const myPara3 = document.createElement("p");
//     const myList = document.createElement("ul");

//     myH2.textContent = heroes[i].name;
//     myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
//     myPara2.textContent = "Age: " + heroes[i].age;
//     myPara3.textContent = "Superpowers:";

//     // Contiene un arreglo que lista los superpoderes del héroe actual.
//     const superPowers = heroes[i].powers;
//     //Para recorrer los superpoderes del héroe, se utiliza otro ciclo for 
//     // — para cada uno se crea un elemento <li>, se asigna el superpoder a él y luego se pone el 
//     // listItem dentro del elemento <ul> (myList) utilizando appendChild().
//     for (var j = 0; j < superPowers.length; j++) {
//       const listItem = document.createElement("li");
//       listItem.textContent = superPowers[j];
//       myList.appendChild(listItem);
//     }

//     myArticle.appendChild(myH2);
//     myArticle.appendChild(myPara1);
//     myArticle.appendChild(myPara2);
//     myArticle.appendChild(myPara3);
//     myArticle.appendChild(myList);

//     section.appendChild(myArticle);
//   }
// }



const header = document.querySelector("header");
const section = document.querySelector("section");

// La URL del JSON o la ruta que se quiere recuperar
const requestURL = 'datos.json';

// Usar fetch para realizar la solicitud GET
fetch(requestURL)
  .then(response => {
    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Convertir la respuesta a JSON
    return response.json();
  })
  .then(superHeroes => {
    // Manejar la respuesta JSON
    populateHeader(superHeroes);
    showHeroes(superHeroes);
  })
  .catch(error => {
    // Manejar errores
    console.error('There has been a problem with your fetch operation:', error);
  });

// Función para agregar contenido al encabezado
const populateHeader = jsonObj => {
  const myH1 = document.createElement("h1");
  myH1.textContent = jsonObj["squadName"];
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent =
    // Recordar que hay 2 maneras de hacerlo
    `Hometown: ${jsonObj["homeTown"]} // Formed: ${jsonObj["formed"]}`;
  // "Hometown: " + jsonObj["homeTown"] + " // Formed: " + jsonObj["formed"];
  header.appendChild(myPara);
}

// Función para crear y mostrar las tarjetas de los superhéroes
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (let i = 0; i < heroes.length; i++) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = heroes[i].name;
    myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
    myPara2.textContent = "Age: " + heroes[i].age;
    myPara3.textContent = "Superpowers:";

    // Contiene un arreglo que lista los superpoderes del héroe actual
    const superPowers = heroes[i].powers;
    // Para recorrer los superpoderes del héroe, se utiliza otro ciclo for
    // — para cada uno se crea un elemento <li>, se asigna el superpoder a él y luego se pone el
    // listItem dentro del elemento <ul> (myList) utilizando appendChild().
    for (let j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}