<?php
  require_once('./conn.php');
  require_once('./utils.php');
  
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
    <nav class="nav">
      <?php
        if ($is_login) {
          echo "<ul>";
          echo   "<li><a href='./register.php'>註冊</a></li>";
          echo   "<li>" . escape($row_child ['nickname']) . "您好" . "</li>";
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
    <div class="board">
      <form class="board-comment" method="POST" action="./add_comment.php">
        <textarea name="content" class="textarea" placeholder="留言內容" style="outline:none;"></textarea>
        <input type="hidden" name="user_id" value="<?= $user_id ?>">
        <input type="hidden" name="parent_id" value="0">
        <?php 
        if ($is_login) {
          echo "<input type='submit' class='btn' value='送出'>";
        } else {
          echo "<input type='submit' class='btn' value='請先登入' disabled>";
        }
        ?>
      </form>
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
        
        $sql = "SELECT c.content, c.created_at, c.id, c.user_id, k_users.nickname FROM k_comments as c JOIN k_users ON c.user_id = k_users.id WHERE c.parent_id = 0 ORDER BY created_at DESC LIMIT $limit_start, $num";
        $result_comment = $conn->query($sql);
        if ($result_comment->num_rows > 0) {
          while ($row_comment = $result_comment->fetch_assoc()) {
            $chr_escape = escape($row_comment['content']);
            $content_with_br = str_replace(chr(13).chr(10), "<br />", $chr_escape);
            ?>
            <div class='post'>
            <?php if ($user_id === $row_comment['user_id']) { ?>
              <div class='post-edit'>
                <form class="edit" method="POST" action="./update_comment.php">
                  <input type="hidden" name="user_id" value="<?= $user_id ?>">
                  <input type="hidden" name="comment_id" value="<?= $row_comment['id'] ?>">
                  <input type='submit' class='btn' value='編輯'>
                </form>
                <form class="edit" method="POST" action="./delete_comment.php">
                  <input type="hidden" name="user_id" value="<?= $user_id ?>">
                  <input type="hidden" name="comment_id" value="<?= $row_comment['id'] ?>">
                  <input type='submit' class='btn' value='刪除'>
                </form>
              </div>
              <?php } ?>
              <div class='post-header'>
                <div class='post-author'><?= escape($row_comment['nickname']) ?></div>
                <div class='post-timestamp'><?= $row_comment['created_at'] ?></div>
              </div>
              <div class='post-content'><?= $content_with_br ?></div>
              
              <div class="post__childs">
              <?php
                $parent_id = $row_comment['id'];
                $sql_sub = "SELECT c.content, c.created_at, c.id, c.user_id, k_users.nickname FROM k_comments as c JOIN k_users ON c.user_id = k_users.id WHERE c.parent_id = $parent_id ORDER BY created_at DESC LIMIT $limit_start, $num";
                $result_sub_c = $conn->query($sql_sub);
                if ($result_sub_c->num_rows > 0) {
                  while ($row_sub_c = $result_sub_c->fetch_assoc()) {
                    $chr_escape = escape($row_sub_c['content']);
                    $content_with_br = str_replace(chr(13).chr(10), "<br />", $chr_escape);
              ?>
              <?php 
              if ($row_comment['user_id'] === $row_sub_c['user_id']) {
                echo "<div class='same-post__child'>";
              } else {
                echo "<div class='post__child'>";
              }
              ?>
                <?php if ($user_id === $row_sub_c['user_id']) { ?>
                  <div class='post-edit'>
                    <form class="edit" method="POST" action="./update_comment.php">
                      <input type="hidden" name="user_id" value="<?= $user_id ?>">
                      <input type="hidden" name="comment_id" value="<?= $row_sub_c['id'] ?>">
                      <input type='submit' class='btn' value='編輯'>
                    </form>
                    <form class="edit" method="POST" action="./delete_comment.php">
                      <input type="hidden" name="user_id" value="<?= $user_id ?>">
                      <input type="hidden" name="parent_id" value="<?= $row_sub_c['id'] ?>">
                      <input type='submit' class='btn' value='刪除'>
                    </form>
                  </div>
                <?php } ?>
                  <div class='post-header'>
                    <div class='post-author'><?= escape($row_sub_c['nickname']) ?></div>
                    <div class='post-timestamp'><?= $row_sub_c['created_at'] ?></div>
                  </div>
                  <div class='post-content'><?= $content_with_br ?></div>
                </div>
                <?php
                    }
                  }
                ?>
                <?php if ($is_login) { ?>
                  <form class="sub-board-comment" method="POST" action="./add_comment.php">
                    <textarea name="content" class="sub-textarea" placeholder="留言內容" style="outline:none;"></textarea>
                    <input type="hidden" name="user_id" value="<?= $user_id ?>">
                    <input type="hidden" name="parent_id" value="<?= $parent_id ?>">
                    <input type='submit' class='btn' value='送出'>
                  </form>
                <?php } ?>
              </div>
            </div>
          <?php
          }
        }
        ?>
      </div>
      <div class='board-pagination'>
      <?php
        if ($page > 0 ) {
          echo   "<a href='./index.php?page=" . $pre . "'>上一頁</li>";
        }
        if ($page + 1 < $pages) {
          echo   "<a href='./index.php?page=" . $next . "'>下一頁</li>";
        }
        $conn->close();
      ?>
      </div>
    </div>
  </body>
</html>