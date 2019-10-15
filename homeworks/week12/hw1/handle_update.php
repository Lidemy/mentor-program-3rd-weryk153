<?php
  require_once('./conn.php');
  
  $content = $_POST['content'];
  $id = $_POST['id'];
  if (!empty($content)) {
    $sql = "UPDATE k_comments SET content='$content' WHERE id = '$id'";
    $result = $conn->query($sql);
    $conn->close();
    if ($result) {
      header('Location: ./index.php');
    } else {
      echo "failed, " . $conn->error;
    }
  }
?>