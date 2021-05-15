//entradas
let nombreUsuario = document.getElementById("nombreUsuario");
let pesoUsuario = document.getElementById("pesoUsuario");
let estaturaUsuario = document.getElementById("estaturaUsuario");
let botonCalcular=document.getElementById("botonCalcular");
let imcResultado=document.getElementById("resultado");

botonCalcular.addEventListener("click", imc);

//proceso


function imc(peso, estatura) {
    let indiceDeMasaCorporal = Number((pesoUsuario.value / (estaturaUsuario.value/100) ** 2).toFixed(2));
    
    if (indiceDeMasaCorporal < 18.5) {
        imcResultado.textContent=`señor(a) ${nombreUsuario.value} su IMC es: ${indiceDeMasaCorporal} y su peso es insuficiente`;
                
    } else if (indiceDeMasaCorporal >= 18.5 && indiceDeMasaCorporal <= 24.9) {
             
        imcResultado.textContent=`señor(a) ${nombreUsuario.value} su IMC es: ${indiceDeMasaCorporal} y presenta un peso normal`;

    } else if (indiceDeMasaCorporal >= 25 && indiceDeMasaCorporal <= 26.9) {
         
        imcResultado.textContent=`señor(a) ${nombreUsuario.value} su IMC es: ${indiceDeMasaCorporal} y presenta un sobrepeso de grado I`;

    } else if (indiceDeMasaCorporal >= 27 && indiceDeMasaCorporal <= 29.9) {
        
        imcResultado.textContent=`señor(a) ${nombreUsuario.value} su IMC es: ${indiceDeMasaCorporal} y presenta un sobrepeso de grado II (preobesidad)`;

    } else if (indiceDeMasaCorporal >= 30 && indiceDeMasaCorporal <= 34.9) {
        
        imcResultado.textContent=`señor(a) ${nombreUsuario.value} su IMC es: ${indiceDeMasaCorporal} y presenta una obesidad de tipo I`;

    } else if (indiceDeMasaCorporal >= 35 && indiceDeMasaCorporal <= 39.9) {
        
        imcResultado.textContent=`señor(a) ${nombreUsuario.value} su IMC es: ${indiceDeMasaCorporal} y presenta una obesidad de tipo II`;

    } else if (indiceDeMasaCorporal >= 40 && indiceDeMasaCorporal <= 49.9) {
        console.log(`su IMC es:${indiceDeMasaCorporal}`);
        imcResultado.textContent=`señor(a) ${nombreUsuario.value} su IMC es: ${indiceDeMasaCorporal} y presenta una obseidad ed tipo III (mórbida)`;
    } else {
        imcResultado.textContent=`señor(a) ${nombreUsuario.value} su IMC es: ${indiceDeMasaCorporal} y presenta una obseidad de tipo IV (extrema)`;
        
    }
}
