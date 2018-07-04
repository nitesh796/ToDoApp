var apiUrl = "http://192.168.1.121/nitesh/todoApp/";
$(document).ready(function() {
    var uid = window.localStorage.getItem("id");
    $.ajax({
      url: apiUrl+'todolist.php',
      type: 'POST',
      dataType: 'json',
      data: {uid: uid},
      success:function(response){
        console.log(response);
      }
    })

});
