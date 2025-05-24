<?php session_start(); ?>
<form method="post">
    <input type="text" name="user" required placeholder="المعرف"><br>
    <input type="password" name="pass" required placeholder="كلمة السر"><br>
    <button type="submit">دخول</button>
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($_POST['user'] == "admin" && $_POST['pass'] == "1234") {
        $_SESSION['user'] = $_POST['user'];
        header("Location: bienvenue.php");
        exit;
    } else {
        echo "معلومات غير صحيحة.";
    }
}
?>
