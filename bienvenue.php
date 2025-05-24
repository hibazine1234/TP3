<?php
session_start();
if (!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit;
}
echo "مرحبا بك، " . $_SESSION['user'];
echo '<br><a href="logout.php">خروج</a>';
?>
