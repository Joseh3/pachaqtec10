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
        console.log ("el numero es par");
    }
    else {
        console.log ("el numero es impar");
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
 //4. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número
  //mayor. Considerar el caso en que 2 números sean iguales.
let num1,num2,num3,mayor;
num1=10;
num2=30;
num3=40;
if(num1>=num2 && num1>=num3){
    mayor=num1;
}else if (num2>=num1 && num2 >=num3){
    mayor=num2;
}else{
    mayor=num3;
}

console.log("el numero mayor de los 3 numeros ingresados es : "+mayor);

//5.Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es
//lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o
//domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.


const fechaComoCadena = "2023-05-12 10:48:22"; // día Sabado
const dias = [
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
  'domingo'
];
const numeroMes = new Date(fechaComoCadena).getDay();
const nombreDia = dias[numeroMes];
console.log("Nombre de día de la semana: ", nombreDia);

//6.Crea un programa que pregunte al usuario un número. Mostrar los números que
//son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
let numero1 = parseInt(prompt("Ingrese un numero por favor:"));
     if ( numero1 > 0 && numero % 5 == 0 ) { 
         console.log("Si, el número "+numero1+ " es múltiplo de 5"  )
     }else{
       console.log("No, el número "+numero1+ " no es múltiplo de 5");

      }

//7. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente
//mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!”
//solo al mostrar los números indicados por el usuario.


    let numr1 = 30;
    let numr3 = 20;
     if ( numr1 <=50 && numr3 <=50 ) { 
         console.log("Loteria"  )
     }else{
       console.log("No ganaste la loteria");

      }
  


//8.Crea un programa que solicite al usuario números, si lo que este introduce es un número, guardarlo en un arreglo. Para terminar de preguntar al usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados enpantalla o en la consola.

const arr = ['2','5','9','33'];

arr.push('10');

console.log(arr); 

//9.Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de preguntar al usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

const conta = ['Hola','mi nombre','es','Jose'];


console.log(conta); 

//10.Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves,domingo, etc).

var dia =1;
if (dia == 1) {
    console.log('Lunes');
} else  { 
    console.log('martes');
}

//11 Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, 

let aprobados=0;
let desaprobados=0;
let nota1= 10;
if(nota1<=6)
console.log("reprobado");
else 
if (nota1>=6 && nota1<=8) 
console.log("bien");
if (nota1=9) 
console.log("bien");
if (nota1=10) 
console.log("excelente");
else {
console.log("desaprobados");
}
console.log("Su nota es  "+" "+nota1) ;

