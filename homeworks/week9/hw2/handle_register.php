<?php
  require_once('./conn.php');

  $nickname = $_POST['nickname'];
  $username = $_POST['username'];
  $password = $_POST['password'];
  $password2 = $_POST['password2'];

  if (empty($nickname) || empty($username) || empty($password) || empty($password2)) {
    echo "<script>
            alert('請檢查資料');
            window.location = 'register.php';
          </script>";
    die;
  }
  
  if ($password !== $password2) {
    echo "<script>
            alert('密碼不同');
            window.location = 'register.php';
          </script>";
    die;
  }

  $sql = "INSERT INTO k_users(nickname, username, password) VALUE('$nickname', '$username', '$password')";
  $result = $conn->query($sql);
  $conn->close();
  if ($result) {
    header('Location: ./login.php');
  } else {
    header('Location: ./register.php');
  }
?>