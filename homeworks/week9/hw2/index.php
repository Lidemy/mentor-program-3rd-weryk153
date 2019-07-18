<?php
  require_once('./conn.php');

  $is_login = false;
  $user_id = '';
  $nickname = '';

  if (isset($_COOKIE["user_id"]) && !empty($_COOKIE["user_id"])) {
    $is_login = true;
    $user_id = $_COOKIE["user_id"];
    $sql = "SELECT * FROM k_users WHERE id = '$user_id'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $nickname = $row['nickname'];
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./index.css" />
  <title>K-hw2、3</title>
</head>
<body>
  <div class="container">
    <nav class="nav">
      <?php
        if ($is_login) {
          echo "<ul>";
          echo   "<li><a href='./register.php'>註冊</a></li>";
          echo   "<li>" . $nickname . "您好" ."</li>";
          echo   "<li><a href='./logout.php'>登出</a></li>";
          echo "</ul>";     
        } else {
          echo "<ul>";
          echo   "<li><a href='./register.php'>註冊</a></li>";
          echo   "<li><a href='./login.php'>登入</a></li>";
          echo "</ul>";
        }
      ?>
    </nav>
    <h1 class="board-title">本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</h1>
    <form class="board" method="POST" action="./add_comment.php">
      <div class="board-comment">
        <textarea type="text" name="content" class="textarea" placeholder="留言內容" style="outline:none;"></textarea>
        <input type="hidden" name="user_id" value="<?php echo $user_id ?>">
        <?php 
          if ($is_login) {
            echo "<input type='submit' class='btn' value='送出'>";
          } else {
            echo "<input type='submit' class='btn' value='請先登入' disabled>";
          }
        ?>
      </div>
      <div class="board-message">
        <?php      
          require_once('./conn.php');

          $sql_comment = "SELECT k_comments.content, k_comments.created_at, k_users.nickname FROM k_comments JOIN k_users ON k_comments.user_id = k_users.id order by created_at DESC";
          $result_comment = $conn->query($sql_comment);
          if ($result_comment->num_rows > 0) {
            while ($row_comment = $result_comment->fetch_assoc()) {
              $content = $row_comment['content'];
              $content_with_br = str_replace(chr(13).chr(10), "<br />",$content);
              echo "<div class='post'>";
              echo   "<div class='post-header'>";
              echo     "<div class='post-author'>" . $row_comment['nickname'] . "</div>";
              echo     "<div class='post-timestamp'>" . $row_comment['created_at'] . "</div>";
              echo   "</div>";
              echo   "<div class='post-content'>" . $content_with_br . "</div>";
              echo "</div>";
            }
          }
          $conn->close();
        ?>
    </form>
  </div>
</body>
</html>