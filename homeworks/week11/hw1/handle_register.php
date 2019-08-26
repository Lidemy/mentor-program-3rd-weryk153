<?php
  require_once('./conn.php');

  $nickname = $_POST['nickname'];
  $username = $_POST['username'];
  $hash = password_hash($_POST['password'], PASSWORD_BCRYPT);

  if (empty($nickname) || empty($username) || empty($hash)) {
    echo "<script>
            alert('請檢查資料');
            window.location = 'register.php';
          </script>";
    die;
  }

  $sql = "INSERT INTO k_users(nickname, username, password) VALUE('$nickname', '$username', '$hash')";
  $result = $conn->query($sql);
  $conn->close();
  if ($result) {
    header('Location: ./login.php');
  } else {
    header('Location: ./register.php');
  }
?>