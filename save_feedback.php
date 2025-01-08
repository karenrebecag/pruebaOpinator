<?php
// Configuración de conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = ""; //x
$dbname = "feedback_form";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Capturar datos del formulario
$recommendation_score = $_POST['recommendation_score'];
$attention_rating = $_POST['attention_rating'];
$additional_feedback = $_POST['additional_feedback'];

// Insertar datos en la base de datos
$sql = "INSERT INTO feedback (recommendation_score, attention_rating, additional_feedback)
VALUES ('$recommendation_score', '$attention_rating', '$additional_feedback')";

if ($conn->query($sql) === TRUE) {
    echo "Gracias por su feedback. ¡Se ha guardado con éxito!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar conexión
$conn->close();
?>
