//1.Solicitar al usuario un número, y determinar si es divisible entre dos o no.
//Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x número no
//es divisible entre 2”.

let n1 = 2;
if (n1 % 2 === 0) {
console.log("Es divisible por 2");
} else {
console.log("No es divisible por 2");
}
//2. Crear un programa que determine si un número introducido en un Prompt es par
//o no, la respuesta será mostrada en un Alert.

let numero = prompt("Introduce un número entero");
let resultado=parImpar(numero);
alert("El número "+numero+" es "+resultado);
function parImpar(numero) {
    if(numero % 2 == 0) {
      return "par";
    }
    else {
      return "impar";
    }
  }
  //3.Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor.
  //No considerar el caso en que ambos números son iguales.
  let a =5;
  let b =9;
  if(a===b)
  console.log("son iguales");
  if(a>b)
  console.log("el numero mayor es : "+a);
  if(b>a)
  console.log("el numero mayor es : "+b);






