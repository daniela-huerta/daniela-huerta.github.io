/* 
    la CFE genera la factura con base en 
    la lectura de Kwh consumidos en un bimestre

    los primeros 300kw son a la tarifa1 (basica)
    los siguientes 300 kw son a la tarifa 2(intermiedia)
    de 601 kw hacia arriba son a la tarifa de alto consumo

    dado un consumo en Kw y los costos de cada tarifa 
    escribir un pequeño programa  en javascipt que 
    obtenga el total a pagar y presente el detalle 
    a pagar de cada tarifa

    1000kw   t1 $1, t2 
        300 * $1 
        300 * $3
        400 * $5
       -----------------
       $3200 
*/

var t1 = 300;
var t2 = 300;
var t3 = 400;

let resT1 = t1 * parseInt(1);
let resT2 = t2 * parseInt(3);
let resT3 = t3 * parseInt(5);

console.log("300 * $1");
console.log("300 * $3");
console.log("400 * $5");

console.log("");

console.log(resT1);
console.log(resT2);
console.log(resT3);

console.log("--------------");

let total = resT1 + resT2 + resT3;

console.log("Total a pagar $" +  total);
