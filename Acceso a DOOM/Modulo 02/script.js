//  Puedo convertir un array como
// const artArray = [...array]
/*El document.getElement nos permite obtener un pedazo de código html es decir un bloque de elementos*/
// document.getElementById("titulo")
// document.getElementsByTagName("div")
// document.getElementsByClassName ("art")

/* El querySelector() nos permite obtener una lista de nodos, es más especifica y flexible ya que podemos
ponerle según atributos y clases */
// document.querySelector()
// document.querySelectorAll()

// Ejemplo const divArticulos = document.querySelectorAll(".articulos article") -> Todos los article dentro del padre que tiene clase ".articulos"
// En ese ejemplo podriamos acceder a parte de esa constante mediante divArticulos.QuerySelector(), es decir
// Puedo acceder a todo eso ya que es lo que acabarca, depende del scope , pero solo podemos usar Query

/* Ejemplo para poner un articulo extra */
const newArticle = document.createElement("div")
newArticle.id = "art-4" // Seteo el id
newArticle.classList.add("art")
const newH2 = document.createElement("h2")
const newP = document.createElement("p")

/* Primera forma de agregar contenido InnerText */
newH2.innerText = "Titulo del H2"
/* Segunda forma de agregar contenido */
const nodeP = document.createTextNode("Texto del cuarto articulo")
newP.appendChild(nodeP)

/* Agregando hijos(contenido) al articulo */
newArticle.appendChild(newH2)
newArticle.appendChild(newP)

const container = document.getElementById("contenedorArticulos")
container.appendChild(newArticle)

container.removeChild(newArticle) //Elimina el hijo newArticle del Elemento con id container

newP.firstChild // Nos devuelve "TEXTO DEL CUARTO ARTICULO", es decir nos devuelve un nodo
newP.firstElementChild //Nos devuelve NULL, ya que no tiene un hijo, es decir etiqueta, como hijo