<?php 
  require_once('./conn.php');

  $error_message = '';
  $user_id = '';

  if(!empty($_POST['username'])) {
    $username = $_POST['username'];

    $sql = "SELECT * FROM k_users WHERE username=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    if (!$result->num_rows) {
      $error_message = '帳號或密碼錯誤';
    }
    if (!password_verify($_POST['password'], $row['password'])) {
      $error_message = '帳號或密碼錯誤';
    } else {
      $row = $result->fetch_assoc();
      $user_id = $row['id'];
      $rand = uniqid();
      setcookie("session_id", $rand, time() + 3600 * 24);
      $sql = "INSERT INTO k_users_certificate(id, user_id) VALUE('$rand', $user_id)";
      $result = $conn->query($sql);
      header('Location: ./index.php');
      $conn->close();
    }
  } 
?> 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./style.css" />
  <title>K-hw2、3</title>
</head>
<body>
  <div class="container">
    <h3 class="board-title">本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</h3>
    <form class="login-page" method="POST" action="./login.php">
      <div class="login-block">
        帳號：<input type="text" name="username">
      </div>
      <div class="login-block">
        密碼：<input type="password" name="password">
      </div>
      <?php 
        if ($error_message !== '') {
          echo $error_message;
        }
      ?>
      <div class="login-block">
        <a href="./index.php" class="return">回到首頁</a>
        <a class="fg-password">忘記密碼</a>
        <input type="submit" value="登入">
      </div>
    </form>
  </div>
</body>
</html>