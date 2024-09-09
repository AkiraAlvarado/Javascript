/*
    *Arrays - Metodos
*/

let amigos = ["Pedro", "Gabriel", "Akira"]
// Agregar elementos a mi array
amigos.push("Gaston")
// o Tambien puede ser let dato=amigo.push("Gastón"), dato me daria
//La cantidad de elementos del array
console.log(amigos)

//Quitar elementos a mi array
amigos.pop()
amigos.push("Acurio")
console.log(amigos)

//Partir nuestro array en 2
let dato = amigos.slice(0,2)
console.log(dato) //No modifica el original , parte el array desde el 0 hasta el 2


/*
 * Arrays - Ciclos 
*/

// Foreach => Para cada elemento , necesito como parámetro una función
// La finalidad es hacer algo con los elementos no retorna como tal nada
amigos.forEach((amigo) => console.log(amigo))


//.map => Misma funcionalidad que foreach pero permite volver el array
// con nuevas cositas , es decir lo permite almacenar , es decir
// nos puede dar otro array

let dato2 = amigos.map( amigo => `Hola ${amigo}`)

console.log(dato2)


//Filer = > Sirve para filtrar contenido
let numeros = [10, 123 ,34 ,123 , 5, 6, 9]
let nuevoArray= []
// Quisiera arrays mayores que 10
numeros.map(num =>{
    if(num>=10){
        nuevoArray.push(num)
    }
})

console.log(nuevoArray)

//Pero con filter
let nuevoArray2 = numeros.filter(num => num>=10) // Esta ejecución devuelve nuevo array por eso guardamos en otra variable
console.log(nuevoArray2)


const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const resultado = cursos.filter((el) => el.nombre.includes('JS'))
const resultado2 = cursos.filter((el) => el.precio < 14000)