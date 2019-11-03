<?php
  require_once('./conn.php');
  
  if (isset($_POST['content']) && !empty($_POST['content'])) {
    $content = $_POST['content'];
    $user_id = $_POST['user_id'];
    $parent_id = $_POST['parent_id'];

    $sql = "INSERT INTO k_comments(content, user_id, parent_id) VALUE('$content', $user_id, $parent_id)";
    $conn->query($sql);
    $conn->close();
    header('Location: ./index.php');
  }
?>