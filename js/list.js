var apiUrl = "http://192.168.1.121/nitesh/todoApp/";
$(document).ready(function() {
    var uid = window.localStorage.getItem("id");
    console.log(uid);
    $.ajax({
      url: apiUrl+'todolist.php',
      type: 'POST',
      dataType: 'json',
      data: {id: uid},
      success:function(response){
        console.log(response);
      }
    })

});
