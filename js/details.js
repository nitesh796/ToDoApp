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

  $(".edit_btns").click(function(){
    $(".contents").attr('contentEditable',true);
    $(".contents-header").css('border','3px solid #ADD8E6');
    $(".contents-header").css('background','white').css('padding','10px 10px');
    $(".contents-header").css('border-radius','6px').css('color','#264d00');
    $(".contents-details").css('border','3px solid #ADD8E6').css('padding-top','10px');
    $(".contents-details").css('background','white').css('padding-left','10px');
    $(".contents-details").css('color','#264d00').css('border-radius','6px');
    // $(".contents-details")
});
$(".save_btns").click(function(){
$(".contents").attr("contentEditable",false);
$(".contents-header").css('border','none');
    $(".contents-header").css('background','none').css('padding','none');
    $(".contents-header").css('border-radius','none').css('color','white');
    $(".contents-details").css('border','none').css('padding-top','none');
    $(".contents-details").css('background','none').css('padding-left','none');
    $(".contents-details").css('color','white').css('border-radius','none');
});
});
