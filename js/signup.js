var apiUrl = "http://192.168.1.121/nitesh/todoApp/";
// var apiUrl = "http://excellencetechnologies.co.in/nitesh/todoApp/";

$(document).ready(function() {
  $("#btn").click(function(e){
      e.preventDefault();
      var name = $("#name").val();
      var email = $("#email").val();
      var password = $("#password").val();
      var birthday = $("#date").val();

<<<<<<< HEAD
      if( name != "" && email != "" && password != "" && birthday != ""){
        $.ajax({
            url: apiUrl + 'signup.php',
            type:'post',
            data:{name:name, email:email, pass:password, bday:birthday},
            dataType: 'json',
            success:function(response){
              console.log(response);
            }
        });

      } else {
        $("#error-msg").html("You need to fill all the field");
      }
=======
      if( name != "" && email != "" && password!="" && birthday!=""){
            $.ajax({
                url: apiUrl + 'signup.php',
                type:'post',
                data:{name:name, email:email, pass:password, bday:birthday},
                dataType: 'json',
                success:function(response){
                  var hasData , message;
                  for (var i = 0; i < response.length; i++) {
                    hasData = response[i].success;
                    message = response[i].data;
                  }
                  if(hasData){
                    $("#error-msg").html(message);
                  }
                }
            });
        }
        else {
          $("#error-msg").html("You need to fill all the field");
        }
>>>>>>> a24a421992fe9c801a7b90f28c60d9a49b132e6a
  });

});

function validateEmail(email){
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,3})+$/i;
  if (filter.test(email)== false) {
    $('#error-msg').html("Enter valid email address");
    return false;
  }
  else{
    $('#error-msg').hide();
  }
}
