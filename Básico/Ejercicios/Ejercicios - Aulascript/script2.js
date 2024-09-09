// Funciones
/*
Ejercicio 1
Funcion que suma 2 numeros y otra parte que verific que sean numeros
*/
// const sumar = (num1, num2) => {
//     return (num1 + num2);
// }

// let a, b;

// do {
//     a = parseInt(prompt("Primer número"));
//     b = parseInt(prompt("Segundo número"));
// } while (isNaN(a) || isNaN(b));

// console.log(sumar(a, b));

/*
Ejercicio 2
calcular MCD
*/
// const MCD = (a, b) => {
//     while (b !== 0) {
//       let resto = a % b;
//       a = b;
//       b = resto;
//     }
//     return a;
//   }
  
//   a = parseInt(prompt("Primer número"));
//   b = parseInt(prompt("Segundo número"));
  
//   console.log(MCD(a, b));

/*
Ejercicio 3
Factorial 
*/
// const factorial = n => {
//     if (n==0){
//         return 1
//     }
//     return n*factorial(n-1)
// }

// console.log(factorial(5))

/*¨
Ejercicio 4 
Ver si es capicua
*/

// const capicua = n =>{
//     let resto , invertido = 0
//     while(n != 0){
//         resto = n%10
//         invertido = invertido * 10 + resto
//         n = parseInt(n/10)
//     }
//     return invertido
// }

// let a = 123321
// if (a == capicua(a)){
//     console.log("Es capicua")
// } else {
//     console.log("No es capicua")
// }

/*ARRAYS */
/*
Ejercicio 1
obtener la suma 
*/

// const sumarLista = lista => {
//     let suma=0
//     lista.forEach(element => {
//         suma +=element
//     });
//     return suma
// }
// console.log(sumarLista([2,4,5,1,2,100]))

/**
 Ejercicio 2 
*/

// let array= []
// let a
// let contadorPar = 0 , contadorImpar = 0
// do{
//     a=parseInt(prompt("Ingrese un valor"))
//     if (isNaN(a)) { //Verifica que sea un numero 
//         console.log("Entrada no válida. Debe ingresar un número.");
//         // Salir del bucle si no es un número
//     }else if (a !== 0) {
//         array.push(a); //Evita que el programa pushee el 0 al array
//     }
// }while(a !== 0)


// for(let i=0 ; i<array.length; i++){
//     if(array[i] % 2 == 0){
//         contadorPar++
//     } else{
//         contadorImpar++
//     }
// }
// console.log(`Hay ${contadorPar} numero pares y ${contadorImpar} impares`)

/*
Ejercicio 3
*/
// Nos da ciertos valores, según pongamos v o i 
// const pequeñoArray = (array, dice) => {
//     let vmin=array[0]
//     let indice=0
//     for(let i=1; i<array.length; i++){
//         if( array[i] < vmin ){
//             vmin=array[i]
//             indice=i
//         }
//     }

//     if(dice=="v"){
//         return vmin
//     } else{
//         return indice
//     }
// }

// console.log(pequeñoArray([4,5,7,3,1], 'i'))

/*
Ejercicio 4
*/
// Encontrar si un numero esta contenido
// const encontrar = (a, b) => {
//     let comprobar = false
//     for(let i = 0 ; i<b.length ; i++){
//         if(a === b[i]){
//             comprobar = true
//         }
//     }
//     return comprobar
// }

// console.log(encontrar("h", ["a", "s" , "f", "g"]))