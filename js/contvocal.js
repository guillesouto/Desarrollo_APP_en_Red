//contar las vocales 

var btncontar = document.getElementById("btncontar");

function countVowels() {
    var phrase = document.getElementById("ContFrase").value;
    var vowelsCount = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    };
    var result = document.getElementById("result");

    // Convertir la frase a minúsculas
    phrase = phrase.toLowerCase();

    // Recorrer cada carácter de la frase
    for (var i = 0; i < phrase.length; i++) {
        var character = phrase.charAt(i);

        // Verificar si el carácter es una vocal
        if (isVowel(character)) {
            vowelsCount[character]++;
        }
    }

    // Mostrar el conteo de vocales
    result.innerHTML = "Conteo de vocales:<br>";
    for (var vowel in vowelsCount) {
        result.innerHTML += vowel + ": " + vowelsCount[vowel] + "<br>";
    }
}

function isVowel(character) {
    return /[aeiouáéíóú]/i.test(character);
}

//al dar clic en el boton de activara la funcion
btncontar.addEventListener('click', countVowels ,true)