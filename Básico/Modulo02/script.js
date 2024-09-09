/*Condicionales*/
let a = 10 
let b = 20
let c = "Juan"
if (a<b){
    console.log(`${c} Comidita owo`)
}
/*If el => Si pasa esto puedes hacer esto
sino debes hacer lo otro */

let edad = 10
let permiso = true
if(edad>18){
    console.log("Puedes venir a la fiesta")
} else if (permiso === true && edad<18){
    console.log("Puedes venir tienes permiso")
} 
else{
    console.log("No puedes venir")
}

/* Condicionales multiples */
/*Que persona de dragon ball eres
 * Si eres fuerte y comelon erees Gokú
 * Si eres veloz y egoista eres Vegeta
 * Si no eres ninguno eres una sabandija
*/

let personalidad = ""

switch (personalidad){
    case "fuerte y comelon":
        console.log("Eres Gokú")
        break
    case "veloz y egoista":
        console.log("Eres Vegeta")
        break
    case "pequeño y debil":
        console.log("Eres Krilin")
        break
    default:
        console.log("Eres una sabandija")
}

/* Ciclos */
/*
    *For es un ciclo que se repetira las veces que queramos
    *for (valor inicizaliación, condicion , incremento)
 */
    for(let i=1; i<=10; i++){
        console.log(i*10)
    }

// Ejercicio de For
// Imprima un texto letra por letra

let texto = "Beto Quiroga"

for(let i=0; i<texto.length; i++){
    if(texto[i] !== " "){
        console.log(texto[i])
    }
}

/*
    *While
    *mientras que!
*/

//Regalar juguetes 

let juguetes = 10 

while (juguetes > 0){
    console.log(`Regalamos un jueguete nos quedan ${juguetes-1}`)
    juguetes--
}

/*
    *Do While
    *A diferencia de los otros ciclos , el código se ejecuta al menos 1 vez
*/


let contador = 1;

do {
  console.log("El contador es: " + contador);
  contador++;
} while (contador <= 5);