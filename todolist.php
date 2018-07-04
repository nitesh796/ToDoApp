<?php
  include('connection.php');

  $data = "Request not Found.";
  $success = false;

  if ($_POST) {
    $user_id = $_POST['id'];
    $data = "Authentication Failed.";

    $login_query = mysqli_query($conn, " SELECT * FROM todo_list WHERE user_id = '" . $user_id . "' ");
    $result = mysqli_fetch_assoc($login_query);
    mysqli_num_rows($login_query);
    die();

    if (mysqli_num_rows($login_query) > 0) {
      $success = true;
      while ($row = $result) {
        $id = $row['id'];
        $title = $row['title'];
        $response[] = array('success'=> $success, 'id'=> $id, 'title'=> $title);
      }
    }

  } else {
    $response[] = array('success'=> $success, 'data'=> $data);
  }

  echo json_encode($response);

?>
