/* RETOS */
/* Ejercicio 1 Hallar el MCM*/
/* Se calcuila mediante la relacion de que a*b / MCD (a,b) */
// const MCD = (a, b) => {
//     while (b !== 0) {
//         let resto = a % b;
//         a = b;
//         b = resto;
//     }
//     return a;
// }
      
// const MCM = (a,b) =>{
//     return Math.abs(a*b)/MCD(a,b)
// }
// console.log(MCM(5,6))


/*Ejercicio 2 , econtrar numero repetidos en un array */
// function encontrarRepetidos(array) {
//     const repetidos = [];

//     for (let i = 0; i < array.length; i++) {
//         let count = 0;
//         for (let j = 0; j < array.length; j++) {
//             if (array[i] === array[j]) {
//                 count++;
//             }
//         }
//         // Si el número aparece más de una vez y no está ya en el array de repetidos, agregarlo
//         if (count > 1 && !repetidos.includes(array[i])) {
//             repetidos.push(array[i]);
//         }
//     }

//     return repetidos;
// }

// // Ejemplo de uso
// const numeros = [10, 3, 5, 3, 10];
// const repetidos = encontrarRepetidos(numeros);
// console.log(repetidos);  // Debería imprimir [10, 3]


/*Ejercicio 3 Encontrar area de un rectangulo de coordenadas cartesianas */


//Ejercicio 4 , Encontrar si un subcojunto determina la suma

// function existeSuma(lista, suma) {

//     if (lista.length == 0) 
//       return false;
  
//     if (lista.includes(suma)) 
//       return true;
  
//     let ultimo = lista.pop();
  
//     if (suma > ultimo)
//       return existeSuma(lista, suma - ultimo);
//     else
//       return existeSuma(lista, suma);
//   }
// const lista = [1, 2, 3, 4];
// const suma = 6;

// console.log(existeSuma(lista, suma)); // Debería imprimir true