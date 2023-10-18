<?php
// Conexión a la base de datos
$conexion = new mysqli("localhost", "root", "", "usuarios");

// Verifica si la conexión tiene errores
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recopila los datos del formulario
    $nombre = $_POST["nombres"];
    $apellido = $_POST["apellidos"];
    $telefono = $_POST["telefono"];
    $correo = $_POST["correo"];
    $contraseña = $_POST["contraseña"];

    // Prepara la consulta SQL para insertar datos en la tabla "usuarios"
    $sql = "INSERT INTO lista (Nombre, Apellido, Celular, Correo, Contraseña) VALUES (?, ?, ?, ?, ?)";

    // Prepara la declaración
    $stmt = $conexion->prepare($sql);
    
    // Vincula los parámetros
    $stmt->bind_param("sssss", $nombre, $apellido, $telefono, $correo, $contraseña);
    
    // Ejecuta la consulta
    if ($stmt->execute()) {
        echo "Registro exitoso";
    } else {
        echo "Error al registrar: " . $stmt->error;
    }
    
    // Cierra la declaración y la conexión
    $stmt->close();
    $conexion->close();
}
?>
