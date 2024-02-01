let texto = prompt("Introduce un texto:");
let posicion = -1;

for (let i = 0; i < texto.length; i++) {
  let letra = texto[i].toLowerCase();
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    posicion = i;
    break;
  }
}

if (posicion !== -1) {
  alert("La vocal '" + texto[posicion] + "' está en la posición " + posicion);
} else {
  alert("No se encontraron vocales en el texto.");
}