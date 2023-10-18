document.addEventListener("DOMContentLoaded", function() {
    const botonRegistrate = document.getElementById("btn-regis");
    const formularioEmergente = document.getElementById("formulario-emergente");
    const cerrarFormulario = document.getElementById("cerrar-formulario");
    const formularioRegistro = document.querySelector("#formulario-emergente form");

    // Muestra el formulario emergente al hacer clic en "Registrarse"
    botonRegistrate.addEventListener("click", function() {
        formularioEmergente.style.display = "block";
    });

    // Oculta el formulario emergente al hacer clic en "Cerrar"
    cerrarFormulario.addEventListener("click", function() {
        formularioEmergente.style.display = "none";
    });
});
