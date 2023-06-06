var btnvoca = document.getElementById("btnvoca");

function extractVocals() {
    var phrase = document.getElementById("inputPhrase").value;
    var vocals = "";
    var result = document.getElementById("resultadovocal");

    // Convertir la frase a minúsculas
    phrase = phrase.toLowerCase();

    // Recorrer cada carácter de la frase
    for (var i = 0; i < phrase.length; i++) {
        var character = phrase.charAt(i);

        // Verificar si el carácter es una vocal
        if (isVowel(character)) {
            vocals += character + " ";
        }
    }

    // Mostrar las vocales que aparecen en la frase
    if (vocals !== "") {
        result.innerHTML = "Vocales encontradas: " + vocals;
    } else {
        result.innerHTML = "No se encontraron vocales en la frase.";
    }
}

function isVowel(character) {
    return /[aeiouáéíóú]/i.test(character);
}
//al dar clic en el boton de activara la funcion
btnvoca.addEventListener('click', extractVocals ,true)