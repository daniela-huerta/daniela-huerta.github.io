let boton = document.createElement("button");
boton.setAttribute("class", "contenido-final");
boton.id = "calcular";

function suma(){
    boton.textContent="Sumar";
    operacion();
}

function resta(){
    boton.textContent="Restar";
    operacion();
}

function multiplicacion(){
    boton.textContent="Multiplicar";
    operacion();
}

function division(){
    boton.textContent="Dividir";
    operacion();
}

function operacion(){
    if(!document.getElementById("calcular")){
        let num1 = document.createElement("label");
        num1.id = "etiqueta";
        num1.setAttribute("class", "contenido-principal");
        num1.textContent = "Número 1: ";
        document.getElementsByTagName("main")[0].appendChild(num1);
    
        let caja_n1 = document.createElement("input");
        caja_n1.setAttribute("class", "contenido-principal");
        caja_n1.type = "number"; 
        document.getElementsByTagName("main")[0].appendChild(caja_n1);
    
        let num2 = document.createElement("label");
        num2.id = "etiqueta";
        num2.setAttribute("class", "contenido-secundario");
        num2.textContent = "Número 2: ";
        document.getElementsByTagName("main")[0].appendChild(num2);
    
        let caja_n2 = document.createElement("input");
        caja_n2.setAttribute("class", "contenido-secundario");
        caja_n2.type = "number"; 
        document.getElementsByTagName("main")[0].appendChild(caja_n2);

        boton.onclick = function(){
            var numero1 = parseFloat(caja_n1.value);
            var numero2 = parseFloat(caja_n2.value);
            var res;
            /*console.log(boton.innerHTML);
            console.log(numero1);
            console.log(numero2);*/
            switch(boton.innerHTML){
                case "Sumar":
                    res = numero1 + numero2;
                    break;
                case "Restar":
                    res = numero1 - numero2;
                    break;
                case "Multiplicar":
                    res = numero1 * numero2;
                    break;
                case "Dividir":
                    res = numero1 / numero2;
                    break;
            }
            //console.log(res);
            document.getElementById("resul").innerHTML = res;
        };
    }

    document.getElementsByTagName("main")[0].appendChild(boton);
}

function promedio(){ 
    /*var aux = document.getElementsByTagName("input")[0];
    var aux1 = document.getElementsByTagName("input")[1];
    var aux2 = document.getElementsByTagName("label")[0];
    var aux3 = document.getElementsByTagName("label")[1];
    aux.remove();
    aux1.remove();
    aux2.remove();
    aux3.remove();*/
    
    var cant = prompt("Introduce cantidad de valores: ");

    for(var i = 0; i < cant; i++){
        let num = document.createElement("label");
        num.id = "etiqueta";
        num.setAttribute("class", "contenido-principal");
        num.textContent = "Número " + (i+1) + ": ";
        document.getElementsByTagName("main")[0].appendChild(num);
    
        let caja = document.createElement("input");
        caja.id = "caja";
        caja.setAttribute("class", "contenido-principal");
        caja.type = "number"; 
        document.getElementsByTagName("main")[0].appendChild(caja);
    }
    boton.textContent="Promedio";
    document.getElementsByTagName("main")[0].appendChild(boton);

    boton.onclick = function(){
        var res = 0;
        for(var i = 0; i < cant; i++){
            res += parseFloat(document.getElementsByTagName("input")[i].value);
            //console.log(res);
        }
        document.getElementById("resul").innerHTML = res/cant;
    };
}

function desviacion(){
    var cant = prompt("Introduce cantidad de valores: ");

    for(var i = 0; i < cant; i++){
        let num = document.createElement("label");
        num.id = "etiqueta";
        num.setAttribute("class", "contenido-principal");
        num.textContent = "Número " + (i+1) + ": ";
        document.getElementsByTagName("main")[0].appendChild(num);
    
        let caja = document.createElement("input");
        caja.id = "caja";
        caja.setAttribute("class", "contenido-principal");
        caja.type = "number"; 
        document.getElementsByTagName("main")[0].appendChild(caja);
    }

    boton.textContent="Desviación Estandar";
    document.getElementsByTagName("main")[0].appendChild(boton);

    boton.onclick = function() {
        var res = 0;
        for(var i = 0; i < cant; i++){
            res += Math.pow(parseFloat(document.getElementsByTagName("input")[i].value), 2);
        }
        res = Math.sqrt(res/cant);
        document.getElementById("resul").innerHTML = res;
    };
}

