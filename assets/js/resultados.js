let resultado = localStorage.getItem("buscador");

console.log(`Resultado del usuario: ${resultado}`);

let spanResultado = document.getElementById("resultado");

spanResultado.innerHTML = resultado;