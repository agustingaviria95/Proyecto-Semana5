function resuladosBuscador() {
    localStorage.setItem("buscador", document.getElementById("buscador").value)
}

document.getElementById("buscador").addEventListener("click", () => {
    let dato = document.getElementById("buscadorInput");

    console.log(`Dato ingresado por el usuario:  ${dato.value}`);
    localStorage.setItem("datoUsuario", dato.value);
});