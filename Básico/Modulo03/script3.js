/*
    *Funciones
*/

//Declaración de mi función saludar
function saludar(nombre){
    //Debemos validar 
    if(typeof nombre === "string"){
        console.log(`Hola ${nombre}, muy buenos días`)
    } else {
        console.log("Escriba un nombre correcto")
    }
}

//Llamada a la función Saludar
let nombre2 ="Akira"
saludar(nombre2)


/*
    *Funciones con valor de Retorno 
*/
function obtenerNombreCompleto(nombres,apellidos){
    return `${nombres} ${apellidos}`
}

let nombre3="Diego Akira"
let apellidos = "Alvarado Arroyo"
console.log(obtenerNombreCompleto(nombre3,apellidos))

/*
    *Funciones con Segunda Clase 
*/

let nombreCompleto = obtenerNombreCompleto(nombre3,apellidos) //Paso el valor de ejecución
let nombreCompleto2 = obtenerNombreCompleto() // Paso la función , y ahora la variable pasa a ser la misma Función

/*
    *Funciones anonimas
*/

let sumar = function (a,b,c){
    return a+b+c
}

let resultado = sumar (2,4,5)
console.log(resultado)

/*
    *Funciones como constantes , siempre deben ser
*/

const saluda = function(nombre){
    console.log("Si")
}

/*
    *SCOPE => Alcance que tienen las variables 
    *Paras las variables globales casi siempre solo usaremos constantes
    *En las funciones solo se deberia usar variables de forma local
*/

const NOMBRE = "AKIRA" //Variable Global

const hola = function(){
    const NOMBRE = "DIEGO" //Variable loca
    console.log(`Hola ${NOMBRE }`)
}

hola() // iMPRIMIra DIEGO porque esa variable era local
console.log(NOMBRE) // Imprimira Akira porque esa variable Global

/*
    *Funciones Flecha
*/

const sumarNumeros = (a,b) => a+b

// const sumarNumeros = (a,b) => {
//     aqui va el código
// }


const restarNumeros = function (c,d){
    return c-d
}

console.log(sumarNumeros(10,5))
console.log(restarNumeros(5,1))

// Las funciones deberian ser pequeños, por ejemplo si
// Una sola función valida el nombre, edad, sexo, es mejor
// Separarlo en varias si es es que se puede

/* Find Se usa para encontrar un valor , devuelve el primer dato que cumpla la condición*/
/* Include Nos dira si incluye un numero en especifico , por ejemplo 345 , es un boolean */
/* Some Comprueba si al menos un elemento del array cumple con una condición, es un boleano y se usa comparación*/
/* Comprueba si todos los elemtnos del array cumplen la condición */
/* Split divide el string en base al caracter que digamos, cada vez que encuentra el caracter
divide el texto y lo almacena en un valor ocmo un nuevo array*/

let persona = {
    nombre: "Beto",
    edad: 21,
    suscriptor: false
}
let valores= Object.values(persona) //Obtiene todos los valores de persona
let valores2= Object.keys(persona) //Obtiene todos los campos de la persona
// Si estuviera vacio el array resultante será de 0
// Con este metodo sabras si el objeto esta vacio


console.log(persona.edad) //Sirve para imprimir un campo