<?php 
session_start();
include 'conf.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    // Fetch user data from the database
    $sql = "SELECT * FROM credentials WHERE username = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "s", $username);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if ($row = mysqli_fetch_assoc($result)) {
        // Check if the password matches
        if ($password === $row['password']) {
            header("Location: \Sunset Valley Resort_final\gitcode\Sunset.Valley.Resort.Websit\home.html");
        } else {
            alert("Invalid username or password.");
        }
    } else {
        alert("Invalid username or password.");
    }

    mysqli_stmt_close($stmt);
}

mysqli_close($conn);
?>



