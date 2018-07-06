<?php
  include('connection.php');

  $data = "Request not Found.";
  $success = false;

  if ($_POST) {

    $todo_id = $_POST['todo_id'];
    $data = "Details not found";
    $response = array();

    $details_query = mysqli_query($conn, " SELECT * FROM todo_list WHERE id = '".$todo_id."' ");

    if(mysqli_num_rows($details_query) > 0){
      $success = true;
      $data = "Details found";
      $result = mysqli_fetch_assoc($details_query);
      $id = $result['id'];
      $title = $result['title'];
      $description = $result['description'];
      $response[] = array('success'=> $success, 'data'=> $data, 'id'=> $id, 'title'=> $title, 'description'=> $description);

    } else {
      $response[] = array('success'=> $success, 'data'=> $data);
    }

  } else {
    $response[] = array('success'=> $success, 'data'=> $data);
  }

  echo json_encode($response);

?>
