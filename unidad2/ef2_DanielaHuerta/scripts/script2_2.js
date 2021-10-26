/*Escribir un programa en JS que calcule la desviacion estandar de un conjunto de valores. 

¿Como se calcula la desviación estandar? https://www.disfrutalasmatematicas.com/datos/desviacion-estandar.html



Funciones que pueden servirte

parseInt, parseFloat

Array.length

x.length*/

let array = [600, 470, 170, 430, 300];
var suma = 0;
var v1 = 600;
var v2 = 318;
var v3 = 170;
var v4 = 358;
var v5 = 300;

for(let i of array){
    suma += i;
}

let resta1 = 394 - v1;
let resta2 = 394 - v2;
let resta3 = 394 - v3;
let resta4 = 394 - v4;
let resta5 = 394 - v5;

let cuadrado = (Math.pow(resta1,2)) + (Math.pow(resta2,2)) + (Math.pow(resta3,2)) + (Math.pow(resta4,2)) + (Math.pow(resta5,2));

let div = cuadrado / 5;

let raiz = parseInt(Math.sqrt(div)) + "mm";

console.log(raiz);