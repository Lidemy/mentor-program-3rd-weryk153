<?php
  require_once('./conn.php');

  $is_login = false;
  $user_id = '';
  $nickname = '';

  if (isset($_COOKIE["session_id"]) && !empty($_COOKIE["session_id"])) {
    $session_id = $_COOKIE["session_id"];
    $sql = "SELECT * FROM k_users_certificate WHERE id = '$session_id'";
    $result = $conn->query($sql);
    if ($result->num_rows) {
      $is_login = true;
      $row = $result->fetch_assoc();
      $user_id = $row['user_id'];
      $sql_child = "SELECT * FROM k_users WHERE id = '$user_id'";
      $result_child = $conn->query($sql_child );
      $row_child  = $result_child ->fetch_assoc();
      $nickname = $row_child ['nickname'];
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
  <div class="container__index">
    <nav class="nav">
      <?php
        if ($is_login) {
          echo "<ul>";
          echo   "<li><a href='./register.php'>註冊</a></li>";
          echo   "<li>" . $nickname . "您好" . "</li>";
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
          if (!isset($_GET['page'])) {
            $page = 0;
          } else {
            $page = $_GET['page'];
          }
          $num = 20;
          $limit_start = $page * $num;
          $next = $page + 1;
          $pre = $page - 1;

          $sql = "SELECT * FROM k_comments ORDER BY created_at DESC";
          $result = $conn->query($sql);
          $total = $result->num_rows;
          $pages = ceil($total / $num);

          $sql_comment = "SELECT k_c.content, k_c.created_at, k_c.id, k_c.user_id, k_users.nickname FROM k_comments as k_c JOIN k_users ON k_c.user_id = k_users.id ORDER BY created_at DESC LIMIT $limit_start, $num";
          $result_comment = $conn->query($sql_comment);
          if ($result_comment->num_rows > 0) {
            while ($row_comment = $result_comment->fetch_assoc()) {
              $chr_escape = htmlspecialchars($row_comment['content'], ENT_QUOTES, 'UTF-8');
              $content_with_br = str_replace(chr(13).chr(10), "<br />", $chr_escape);
              echo "<div class='post'>";
              echo   "<div class='post-header'>";
              echo     "<div class='post-author'>" . $row_comment['nickname'] . "</div>";
              echo     "<div class='post-timestamp'>" . $row_comment['created_at'] . "</div>";
              echo   "</div>";
              echo   "<div class='post-content'>" . $content_with_br . "</div>";
              if ($user_id === $row_comment['user_id']) {
                echo   "<div class='post-edit'>";
                echo     "<li><a href='./update.php?id=" . $row_comment['id'] . "'>編輯</a></li>";
                echo     "<li><a href='./delete.php?id=" . $row_comment['id'] . "'>刪除</a></li>";
                echo   "</div>";
              }
              echo "</div>";
            }
          }
          $conn->close();
        ?>
    </form>
    <?php
      echo "<div class='board-pagination'>";
      if ($page > 0 ) {
        echo   "<a href='./index.php?page=" . $pre . "'>上一頁</li>";
      }
      if ($page + 1 < $pages) {
        echo   "<a href='./index.php?page=" . $next . "'>下一頁</li>";
      }
      echo "</div>";
    ?>
  </div>
</body>
</html>