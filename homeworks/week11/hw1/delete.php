<?php
  require_once('./conn.php');

  $id = $_GET['id'];
  $sql = "DELETE FROM k_comments WHERE id = '$id'";
  if ($conn->query($sql)) {
    header('Location: ./index.php');
  } else {
    echo "failed: " . $conn->error;
  }
  $conn->close();
?>