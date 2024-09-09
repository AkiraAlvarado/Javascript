// EJERCICIO 1
// let a = parseInt(prompt("Escribe el primer numero"))
// if(a% 2==0 ){
//     console.log("Es un numero par")
// } else{
//     console.log("Es un numero impar")
// }

// EJERCICIO 2
// let velocidad = parseInt(prompt("Escribe la velocidad"))
// if ( velocidad > 40 && velocidad < 60 ){
//     console.log("Puede seguir")
// } else{
//     console.log("Descalificado")
// }

//EJERCICIO 3
// let a=parseInt(prompt("Ingrese un valor"))
// let b=[]
// for(let i=0; i<=a; i++){
//     b.push(i)
// }   

// console.log(b)

//Ejercicio 4
// Ingresa un valor y da la suma de todos los valores divisibles entre 2 
// let a=parseInt(prompt("Ingrese un valor"))
// let suma = 0 

// for(let i=0; i<=a ; i++){
//     if(i % 2 == 0){
//         console.log(i)
//         suma += i
//     }
//     if( i == a){
//         console.log(a)
//         console.log(`La suma es ${suma}`)
//     }
// }

//Ejercicio 5
// Da la media , despues de ingresar 4 numeros
// let  suma = 0 , veces, media;
// for (veces = 0; veces < 4; veces++)
// {
//     let numero 
//     numero = parseInt(prompt("Teclear numero "+numero));
//     suma += numero;
// }
// media = suma/4;
// alert("La media es " + media);


//CICLOS FOR
// Ejercicio 6
// Devuelve todos los numeros inferiores al ingresado que sean divisibles entre 3 y den resto 2
// let a = parseInt(prompt("Ingrese un numero"))

// for(let i = 0 ; i < a ; i++ ){
//     if(i % 3 == 2){
//         console.log(i)
//     }
// }

// Ejercicio 7
//Devuelve un contador en base 5
// for(let a=0; a<=1; a++){
//     for(let i=0; i<5; i++){
//         console.log(`${a},${i}`)
//     }
// }

// Ejercicio 123



//Devuelve un triangulo de estrellas78
// let alto, ancho,  linea, cadena;
// alto = parseInt(prompt("Teclea un número de 1 a 10"));
// for ( linea = 0; linea < alto; linea++){
//      cadena=''
//      for(ancho = 0; ancho <= linea; ancho++){
//          cadena += "*";
//         }
//      console.log( cadena+ "\n");
// }

// CICLOS WHILE
//Ejercicio 8
// Muesta si un numero es primo
// let a = parseInt(prompt("Ingrese un numero"))
// let cont = 0
// let i=1
// while(i<=a){
//     if(a%i == 0){
//         cont++
//     }
//     i++
// }

// if(cont==2){
//     console.log("Es primo")
// }else{
//     console.log("No es primo")
// }

//Ejercicio 9
// Hallar maximo valor de array con while y con Math
// let a = []
// while(true){
//     let valor = parseInt(prompt("Ingrese un valor"));
//     if (valor === 0) {
//         break; // Salir del bucle si se ingresa 0
//     }
//     a.push(valor); // Agregar el valor al array 'a'
// }

// console.log(Math.max(...a))
// console.log(Math.min(...a))

// Hallar maximo valor de array con for y sin Math
// let b = [34, 123, 5,77 , 534 , 12]
// let maximo = b[0]
// let minimo = b[0]

// for (let i = 1 ; i<b.length;i++ ){
//     if(b[i]<minimo){
//         minimo = b[i]
//     }
//     if(b[i]>maximo){
//         maximo = b[i]
//     }
// }
// console.log(minimo)
// console.log(maximo)


//Ejercicio 10 
// let c
// do{
//     let a= parseInt(prompt("Ingrese el primer valor"))
//     let b= parseInt(prompt("Ingrese el segundo valor"))
//     console.log(a+b)
//     do{
//         console.log("Solo escriba letras")
//         c = prompt("Desea continuar?")
//     }
//     while(c != 'S' && c != 'N');

// } while ( c === "S")


//Ejercicio 10
//Hallar el MCD
// let a= parseInt(prompt("Ingrese el primer valor"))
// let b= parseInt(prompt("Ingrese el segundo valor"))
// let resto = 0

// do{
//     resto = a % b
//     if (resto == 0){
//         mcd = b
//     } else{
//         a = b
//         b = resto
//     }
// }while(resto !=0)

// console.log(mcd)

//eJERICCIO 11
// var numero, salida='', digito;
// numero = parseInt(prompt("teclear un número"));
// do{
//    digito =  numero%10;
//    numero = parseInt(numero/10);
//    salida += digito+'  ';
// }while (numero >0)
// alert("Dígitos del número "+salida);

//Ejercicio 12
//En el ejercicio de abajo , pedia sumar todos los numeros pares anteriores al ingresado
// let numero
// do{
//     numero = parseInt(prompt("Ingrese un numero"))
//     let contador=0, suma=0
//     do{
//         if(contador % 2 ==0){
//             suma += contador
//         }
//         contador++
//     }while(contador<numero)
//     console.log(suma)

// } while(numero > 0 )


//Ejercicio 13
// let a, b
// do{
//     a= parseInt(prompt("Escribe el primero numero"))
//     b= parseInt(prompt("Escribe el segundo numero"))
//     if(a > b){
//         console.log("Numeros en orden decreciente")
//         break
//     }
// }while( a<= b)
//     console.log("Numeros en orden creciente")

//Ejercicio 14
//  Verifica si un numero es capicua
// let numero, inverso=0, copia, resto;
// numero = parseInt(prompt("teclear el numero"));
// copia = numero;
// do {    
//    resto = copia%10;  // Quita el resto para que sea el primer numero de copia
//    inverso = inverso*10 + resto;    // Agrega el resto pero va multiplicando por 10 el anterior para que de unidades pase a decenas, luego centas y así
//    copia = parseInt(copia/10);   // Elimina practicamente el resto que ya tengo
// } while(copia != 0); 
// if (inverso == numero)
//     alert(numero+" es palindromo ");
// else
//     alert(numero+" no es palindromo ");