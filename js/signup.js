var apiUrl = "http://192.168.1.121/nitesh/todoApp/";
// var apiUrl = "http://excellencetechnologies.co.in/nitesh/todoApp/";

$(document).ready(function() {
  $("#btn").click(function(e){
      e.preventDefault();
      var name = $("#name").val();
      var email = $("#email").val();
      var password = $("#password").val();
      var birthday = $("#date").val();

      if( name != "" && email != "" && password!="" && birthday!=""){
            $.ajax({
                url: apiUrl + 'signup.php',
                type:'post',
                data:{name:name, email:email, pass:password, bday:birthday},
                dataType: 'json',
                success:function(response){
                console.log(response);
                }
            });
        }
        else {
          $("#error-msg").html("You need to fill all the field");
        }
  });

});