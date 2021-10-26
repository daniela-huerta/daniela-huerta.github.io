let imagen = document.getElementById("pic");

function calcular(){
    let peso = document.getElementById("peso");
    let estatura = document.getElementById("estatura");
    let res = document.getElementById("imc");
    let categoria = document.getElementById("categoria");

    let res_imc = peso.value / Math.pow(estatura.value, 2);

    res.innerText = res_imc;
    categoria.innerText = res_categoria(res_imc);
}

function res_categoria(result){
    if (result < 18.5) {
        imagen.src = "img/bajo.jpg";
        return "Peso insuficiente";
    } else {
        if (result >= 18.5 && result <= 24.9) {
            imagen.src = "img/normal.jpg";
            return "Peso normal";
        } else {
            if (result >= 25 && result <= 26.9) {
                imagen.src = "img/sobrepeso.jpg";
                return "Sobrepeso grado I";
            } else {
                if (result >= 27 && result <= 29.9) {
                    imagen.src = "img/sobrepeso.jpg";
                    return "Sobrepeso grado II";
                } else {
                    if (result >= 30 && result <= 34.9) {
                        imagen.src = "img/obesidad1.jpg";
                        return "Obesidad tipo I";
                    } else {
                        if (result >= 35 && result <= 39.9) {
                            imagen.src = "img/obesidad2.jpg";
                            return "Obesidad tipo II";
                        } else {
                            if (result >= 40) {
                                imagen.src = "img/obesidad3.jpg";
                                return "Obesidad tipo III";
                            } else {
                                return "Vuelve a intentarlo :(";
                            }
                        }
                    }
                }
            }
        }
    }
}
