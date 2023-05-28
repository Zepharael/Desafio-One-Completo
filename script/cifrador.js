function cifrar() {
  var texto = document.getElementById("texto").value;
  var resultado = "";

  var hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var hasNumbers = /[0-9]/;
  var hasUppercase = /[A-Z]/;
  var hasAccents = /[áéíóúÁÉÍÓÚ]/;

  if (hasSpecialChars.test(texto) || hasNumbers.test(texto) || hasUppercase.test(texto) || hasAccents.test(texto)) {
    alert("Por favor, ingresa solo letras minúsculas sin caracteres especiales, números, mayúsculas o acentos.");
    return;
  }

  for (var i = 0; i < texto.length; i++) {
    var letra = texto.charAt(i);

    switch (letra) {
      case "a":
        resultado += "ai";
        break;
      case "e":
        resultado += "enter";
        break;
      case "i":
        resultado += "imes";
        break;
      case "o":
        resultado += "ober";
        break;
      case "u":
        resultado += "ufat";
        break;
      default:
        resultado += letra;
    }
  }

  document.getElementById("texto").value = ""; // Se borra el contenido del cuadro de texto
  document.getElementById("resultado").value = resultado;
}

function descifrar() {
  var texto = document.getElementById("texto").value;
  var resultado = "";

  var hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var hasNumbers = /[0-9]/;
  var hasUppercase = /[A-Z]/;
  var hasAccents = /[áéíóúÁÉÍÓÚ]/;

  if (hasSpecialChars.test(texto) || hasNumbers.test(texto) || hasUppercase.test(texto) || hasAccents.test(texto)) {
    alert("Por favor, ingresa solo letras minúsculas sin caracteres especiales, números, mayúsculas o acentos.");
    return;
  }

  for (var i = 0; i < texto.length; i++) {
    var letra = texto.charAt(i);

    switch (letra) {
      case "a":
        if (texto.substr(i, 2) === "ai") {
          resultado += "a";
          i++;
        } else {
          resultado += letra;
        }
        break;
      case "e":
        if (texto.substr(i, 5) === "enter") {
          resultado += "e";
          i += 4;
        } else {
          resultado += letra;
        }
        break;
      case "i":
        if (texto.substr(i, 4) === "imes") {
          resultado += "i";
          i += 3;
        } else {
          resultado += letra;
        }
        break;
      case "o":
        if (texto.substr(i, 4) === "ober") {
          resultado += "o";
          i += 3;
        } else {
          resultado += letra;
        }
        break;
      case "u":
        if (texto.substr(i, 4) === "ufat") {
          resultado += "u";
          i += 3;
        } else {
          resultado += letra;
        }
        break;
      default:
        resultado += letra;
    }
  }

  document.getElementById("texto").value = ""; // Se borra el contenido del cuadro de texto
  document.getElementById("resultado").value = resultado;
}

function copiar() {
  var resultado = document.getElementById("resultado");
  resultado.select();
  document.execCommand("copy");
  alert("Copiado al portapapeles");
}

function pegar() {
  var texto = "";
  if (navigator.clipboard && navigator.clipboard.readText) {
    navigator.clipboard.readText().then(function (clipText) {
      texto = clipText;
      document.getElementById("texto").value = texto;
      document.getElementById("resultado").value = "";
    });
  }
}

function borrar() {
  var texto = document.getElementById("texto");
  var resultado = document.getElementById("resultado");

  if (texto.value !== "" || resultado.value !== "") {
    var confirmacion = confirm("Si borras perderás el progreso. ¿Estás seguro?");
    if (confirmacion) {
      texto.value = "";
      resultado.value = "";
    }
  }
}
