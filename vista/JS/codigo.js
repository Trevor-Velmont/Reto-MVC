document.addEventListener("DOMContentLoaded", function() {
    const botonRegistrate = document.getElementById("btn-regis");
    const formularioEmergente = document.getElementById("formulario-emergente");
    const cerrarFormulario = document.getElementById("cerrar-formulario");
    const contrasenaRegis = document.getElementById("contraseña");
    const confirmContrasena = document.getElementById("confirm-contraseña");
    const formularioRegistro = document.querySelector("#formulario-emergente form");

    // Muestra el formulario emergente al hacer clic en "Registrarse"
    botonRegistrate.addEventListener("click", function() {
        formularioEmergente.style.display = "block";
    });

    // Oculta el formulario emergente al hacer clic en "Cerrar"
    cerrarFormulario.addEventListener("click", function() {
        formularioEmergente.style.display = "none";
    });

    // Validación al enviar el formulario
    formularioRegistro.addEventListener("submit", function(event) {
        if (contrasenaRegis.value !== confirmContrasena.value) {
            alert("Las contraseñas no coinciden. Por favor, vuelva a intentar.");
            event.preventDefault(); // Evita que el formulario se envíe
        }
    });
});
