<?php
session_start();
include "php_files/conf";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Input validation (add more as needed)
    if (empty($username) || empty($password)) {
        alert("Username and password are required.");
        exit();
    }

    try {
        $conn = new PDO("mysql:host=" . $servername . ";dbname=" . $dbname, $dbusername, $dbpassword); // Use dbusername and dbpassword from conf.php
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $conn->prepare("SELECT id, password FROM users WHERE username = :username");
        $stmt->bindParam(':username', $username);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {  // Correct password check
            $_SESSION["user_id"] = $user['id'];
            $_SESSION["username"] = $username;
            header("Location: welcome.php");
            exit();
        } else {
            echo "Invalid username or password.";
        }
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }

    $conn = null;
}
?>

