<?php
  require_once('./conn.php');
  
  $content = $_POST['content'];
  $user_id = $_POST['user_id'];
  if ($content !== '') {
    $sql = "INSERT INTO k_comments(content, user_id) VALUE('$content', $user_id)";
    $result = $conn->query($sql);
    $conn->close();
    header('Location: ./index.php');
  }
?>