<?php
  include('connection.php');

  $data = "Request not Found.";
  $success = false;

  if ($_POST) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $data = "Authentication Failed.";

    $login_query = mysqli_query($conn, "SELECT * FROM todo_users");

    if (mysqli_num_rows($login_query) > 0) {
      while ($row = mysqli_fetch_assoc($login_query)) {
        if ($username == $row['email'] && $password == $row['password']) {
          $success = true;
          $data = "Authorized";
        }
      }
    }

    if ($success) {
      $response[] = array('success'=> $success, 'data'=> $data);
    }else {
      $response[] = array('success'=> $success, 'data'=> $data);
    }

  } else {
    $response[] = array('success'=> $success, 'data'=> $data);
  }

  echo json_encode($response);

?>
