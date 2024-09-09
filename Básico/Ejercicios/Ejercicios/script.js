/* Ejercicio 2 */
// Calcular Impuestos

// const calcularImpuestos = (edad, ingresos) => {
//     let impuestos = 0 
//     if (edad >= 18 && ingresos >= 1000){
//         impuestos = ingresos*0.40
//     }else{
//         impuestos = 0
//     }
   
//     return impuestos
// }

// console.log(calcularImpuestos(18, 1000)) // 400
// console.log(calcularImpuestos(40, 10000)) // 4000
// console.log(calcularImpuestos(17, 5000)) // 0
// console.log(calcularImpuestos(30, 500)) //0

/* Ejercicio 3 */
// Conversión a K y M
// const likes = a => {
//     let conversion = a
//     if(a>999999){
//       conversion = parseInt(conversion / 1000000)
//       console.log(`${conversion}M`)
//     } else if (a>999){
//         conversion = parseInt(conversion / 1000)
//       console.log(`${conversion}K`)
//     }else{
//         console.log(`El numero ${a} es menor que 1000`)
//     }
// }

// console.log(likes(983)) // "983"
// console.log(likes(1900)) // "1K"
// console.log(likes(54000)) // "54K"
// console.log(likes(120800)) // "120K"
// console.log(likes(25222444)) // "25M"

/* Ejercicio 4 */
// Mandar mensajes según si sea multiplo de 3 , 5 o ambos
// const fizzBuzz = num => {
//     if (num%3 == 0 && num%5 == 0){
//         console.log("fizzBuzz")
//     } else if ( num % 3 == 0){
//         console.log("Fizz")
//     } else if( num % 5 == 0){
//         console.log("Buzz")
//     } else {
//         console.log(num)
//     }
// }

// console.log(fizzBuzz(6)); // "fizz"
// console.log(fizzBuzz(20)); // "buzz"
// console.log(fizzBuzz(30)); // "fizzbuzz"
// console.log(fizzBuzz(8)); // 8

/* Ejercicio 5  */
// Ver cuantos numeros hay en un rango, usando un ciclo
// const contarRango = (a,b) => {
//     let contador=0,c
//     if(a>b){
//         c=a
//         a=b
//         b=c
//     }
//     for (a; a<b; a++){
//         contador++
//     }
//     return contador-1
// }

// console.log(contarRango(1, 9)) // 7
// console.log(contarRango(1332, 8743)) // 7410
// console.log(contarRango(5, 6)) // 0

/* Ejercicios 6 */
// Calcula y devuelve el número de as
// const numeroDeAes = cadena => {
//     let contador=0
//     for(let i=0; i<cadena.length; i++){
//         if (cadena[i] === 'a') {
//             contador++;
//         }
//     }
//     console.log(`El número de a es ${contador}`)
// }

// console.log(numeroDeAes("abracadabra")) // 5
// console.log(numeroDeAes("etinol")) // 0
// console.log(numeroDeAes("")) // 0

/* Ejercicio 7 */
// Nos dice el número de caracteres de un String
// const numeroDeCaracteres = (cadena,caracter) =>{
//     let contador = 0
//     for (let i = 0 ; i<cadena.length ; i++){
//         if (cadena[i] === caracter){
//             contador++
//         }
//     }
//     return contador
// }

// console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
// console.log(numeroDeCaracteres("MMMMM", "m")) // 0
// console.log(numeroDeCaracteres("eeee", "e")) // 4

/* Ejercicio 8 */
//funcion que retorna la suma de todos los números de un arreglo
// const sumarArreglo = arreglo =>{
//     let suma=0
//     arreglo.forEach(element => {
//         suma += element
//     });
//     return suma
// }
// console.log(sumarArreglo([3, 1, 2])) // 6
// console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
// console.log(sumarArreglo([])) // 0

/* Ejercicio 9 */
// Funcion que devuelve un nuevo array pero sin ceros
// const removerCeros = arreglo =>{
//     let arregloNuevo = arreglo.filter( num => num !== 0)
//     console.log(arregloNuevo)
// }

// console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
// console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
// console.log(removerCeros([0, 0, 0])) // []

/* Ejercicio 10 */
// Transcribir de ADN a ARN

// const transcribir = cadena => {
//     let arn = '';
//     for (let i = 0; i < cadena.length; i++) {
//         switch (cadena[i].toUpperCase()) {
//             case 'G':
//                 arn += 'C';
//                 break;
//             case 'C':
//                 arn += 'G';
//                 break;
//             case 'T':
//                 arn += 'A';
//                 break;
//             case 'A':
//                 arn += 'U';
//                 break;
//         }
//     }
//     return arn;
// }

// console.log(transcribir("ACGT")); // "UGCA"
// console.log(transcribir("ACGTGGTCTTAA")); // "UGCACCAGAAUU"

// /* Ejercicio 11 */
// // Capitalizar cada palabra
// const capitalizar = cadena => {
//     return cadena.split(' ')  // Divide la cadena en un arreglo de palabras usando el espacio como separador
//     .map(word =>          // Para cada palabra en el arreglo, aplica la siguiente transformación:
//         word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//         // - word.charAt(0): Obtiene el primer carácter de la palabra.
//         // - .toUpperCase(): Convierte el primer carácter a mayúscula.
//         // - word.slice(1).toLowerCase(): Obtiene el resto de la palabra (desde el segundo carácter hasta el final) y lo convierte a minúsculas.
//     )
//     .join(' ');           // Une todas las palabras transformadas en una sola cadena, separadas por espacios
// }
// console.log(capitalizar("hola mundo")) // "Hola Mundo"
// console.log(capitalizar("make it real")) // "Make It Real"
// console.log(capitalizar("")) // ""

/*Ejercicio 12 */
//Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo

// const max = arreglo => {
//     let numMax=0 
//     for(let i=0; i<arreglo.length; i++){
//         if(arreglo[i]>numMax){
//             numMax=arreglo[i]
//         }
//     }
//     return numMax
// }
// console.log(max([3, 9, 6])) // 9
// console.log(max([67, 35, 54, 26])) // 67
// console.log(max([5, 9, 2, 4, 5, 7])) // 9

/* Ejercicio 13 */

function password(s) {
    return s.toLowerCase()  // reemplaza mayúsculas por minúsculas
     .replace(/\s+/g, '')  // elimina espacios en blanco
     .replace(/a/g, '4')  // reemplaza "a" por "4"
     .replace(/e/g, '3')  // reemplaza "e" por "3"
     .replace(/i/g, '1')  // reemplaza "i" por "1"
     .replace(/o/g, '0');  // reemplaza "o" por "0"
  }

  console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""