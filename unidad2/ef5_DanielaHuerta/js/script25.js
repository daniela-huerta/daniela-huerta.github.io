var res;

let on = document.getElementById("on");
let off = document.getElementById("off");

let result = document.getElementById("resultados");
let limpiar = document.getElementById("borrar");

let btns = document.querySelectorAll("button");

on.addEventListener("click", encendido, false);
off.addEventListener("click", apagado, false);
limpiar.addEventListener("click", borrar, false);

function borrar(){
    result.textContent = "0";
}

function agregar_num(n){
   res = obtResult();
   if (res != '0' || isNaN(n)) {
       addResult(res + n);
   } else {
       addResult(n);
   }
}

function calcular(){
    res = eval(obtResult());
    addResult(res);
}

function addResult(num){
    document.getElementById('resultados').innerHTML = num;
}

function obtResult(){
    return document.getElementById('resultados').innerHTML;
}

function encendido() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].disabled = false;
    }
}

function apagado() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].disabled = true;
    }
}
