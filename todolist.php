<?php
  include('connection.php');

  $data = "Request not Found.";
  $success = false;

  if ($_POST) {

    $user_id = $_POST['uid'];
    $data = "Authentication Failed.";
    $response = array();
    
    $login_query = mysqli_query($conn, " SELECT * FROM todo_list WHERE user_id = '" . $user_id . "' ");

    if (mysqli_num_rows($login_query) > 0) {
      $success = true;
      while ($row = mysqli_fetch_assoc($login_query)) {
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
