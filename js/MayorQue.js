//detectar cual numero es mayor
var btnMayor = document.getElementById("btnMayor");

function compararNumeros() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultado = document.getElementById("resultado");

    if (isNaN(numero1) || isNaN(numero2)) {
        resultado.innerHTML = "Por favor, ingresa dos números válidos.";
    } else if (numero1 > numero2) {
        resultado.innerHTML = "El número " + numero1 + " es mayor que el número " + numero2 + ".";
    } else if (numero2 > numero1) {
        resultado.innerHTML = "El número " + numero2 + " es mayor que el número " + numero1 + ".";
    } else {
        resultado.innerHTML = "Los números ingresados son iguales.";
    }
}
//al dar clic en el boton de activara la funcion
btnMayor.addEventListener('click', compararNumeros ,true)