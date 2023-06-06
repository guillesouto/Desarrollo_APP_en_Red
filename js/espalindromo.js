//DETECTOR SI ES PALINDORMO

var btnpalin = document.getElementById("btnpalin");

function checkPalindrome() {
  var input = document.getElementById("inputString").value;
  var result = document.getElementById("result1");
  // Convertir la cadena de entrada a minúsculas y eliminar caracteres especiales y espacios en blanco
  var cleanInput = input.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');

  // Obtener la cadena invertida
  var reversedInput = cleanInput.split('').reverse().join('');

  // Verificar si la cadena original es igual a la cadena invertida
  if (cleanInput === reversedInput) {
      result.innerHTML = "'" + input + "' es un palíndromo!";
  } else {
      result.innerHTML = "'" + input + "' no es un palíndromo.";
  }
}
//al dar clic en el boton de activara la funcion
btnpalin.addEventListener('click', checkPalindrome ,true)