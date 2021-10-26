let imagenes = ['img/bp.jpeg', 'img/jisoo.jpeg', 'img/jennie.png', 'img/rosie.jpeg', 'img/lisa.jpeg'];
let imagen = document.getElementById("imagen");
let intervalo;

loadCarrusel(); 

imagen.addEventListener('mouseover', sobreImagen, false);
imagen.addEventListener('mouseout', loadCarrusel, false);

function loadCarrusel(){
    intervalo = setInterval(siguiente, 3000);
}

function sobreImagen(){
    clearInterval(intervalo);
}

var contador = 0;
/*console.log(imagenes.length);
console.log(contador);*/
function antes(){
    //console.log("funcion antes");
    if(contador > 0){
        //console.log("funcion antes primera parte");
        imagen.src = imagenes[contador - 1];
        contador--;
        //console.log(contador);
    } else {
        imagen.src = imagenes[imagenes.length - 1];
        contador = imagenes.length - 1;
        //console.log(contador);
    }
}

function siguiente(){
    //console.log("funcion siguiente");
    if(contador < imagenes.length - 1){
        //console.log("funcion siguiente primera parte");
        imagen.src = imagenes[contador + 1];
        contador++;
        //console.log(contador);
    } else {
        //console.log("funcion siguiente segunda parte");
        imagen.src = imagenes[0];
        contador = 0;
        //console.log(contador);
    }
}
