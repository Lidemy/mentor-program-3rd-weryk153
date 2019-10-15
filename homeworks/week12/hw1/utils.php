<?php
  require_once('./conn.php');

  $id = $_GET['id'];
  $sql = "SELECT * FROM k_comments WHERE id = '$id'";
  $result = $conn->query($sql);
  $row = $result->fetch_assoc();
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
    <h2 class="board-title">編輯留言</h2>
    <form class="board" method="POST" action="./handle_update.php">
      <div class="board-comment">
        <?php
          echo "<textarea type='text' name='content' class='textarea' style='outline:none;'>" . $row['content'] . "</textarea>";
          echo "<input type='hidden' name='id' value='" . $id . "'>";
        ?>
        <input type="submit" value="送出">
      </div>
    </form>
  </div>
</body>
</html>