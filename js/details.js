var apiUrl = "http://192.168.1.121/nitesh/todoApp/";
// var apiUrl = "http://excellencetechnologies.co.in/nitesh/todoApp/";

$(document).ready(function() {
  var todo_id = window.localStorage.getItem("todo_id");
  $.ajax({
    url: apiUrl+'tododetails.php',
    type: 'POST',
    dataType: 'json',
    data: {todo_id : todo_id},
    success:function(response){
      console.log(response);
      var data = "<div class='contents-header'>" +
        "<h4>" + response[0].title + "</h4>" +
        "<hr>" +
      "</div>" +
      "<div class='contents-details'>" +
        "<p>" + response[0].description + "</p>" +
      "</div>";
      $(".contents").html(data);
    }
  });
});
