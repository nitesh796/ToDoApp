var apiUrl = "http://192.168.1.121/nitesh/todoApp/";
// var apiUrl = "http://excellencetechnologies.co.in/nitesh/todoApp/";

$(document).ready(function() {
    // Fetching the data
    var uid = window.localStorage.getItem("id");
    $.ajax({
      url: apiUrl+'todolist.php',
      type: 'POST',
      dataType: 'json',
      data: {uid: uid},
      success:function(response){
        $.each(response,function(i, data) {
          var isChecked;
          if(data.check=='1'){
            isChecked = "checked";
          }
          else {
            isChecked = "";
          }
          var listdata = "<li id='"+data.id+"'>" +
            "<label>" +
              "<input type='checkbox' "+isChecked+">" +
              "<span class='box'></span>" +
              "<a href='javascript:void(0)' class='box-text'>"+data.title+"</a>" +
              "<div class='delete-todo-item'>" +
                "<a href='javascript:void(0)'>" +
                  "<i class='material-icons'>delete</i>" +
                "</a>" +
              "</div>" +
            "</label>" +
          "</li>"
          $(".todos").append(listdata);
          if($('input[type="checkbox"]').is(":checked")){
            $(".box-text").css('text-decoration', 'line-through');
          }
          else {
            $(".box-text").css('text-decoration', 'none');
          }
        });
      }
    });

    // Adding The data
    $("#save_task").click(function(event) {
      event.preventDefault();
      var title = $("#defaultForm-email").val();
      var description = $("#defaultForm-pass").val();
      if (title != "" && description != "") {
        $.ajax({
          url: apiUrl+'addtodo.php',
          type: 'POST',
          dataType: 'json',
          data: {uid: uid , title : title , description : description},
          success:function(response){
            $.each(response,function(i, data) {
              var hasData = data.success;
              var msg = data.data;
              var listdata = "<li id='"+data.id+"'>" +
                "<label>" +
                  "<input type='checkbox'/>" +
                  "<span class='box'></span>" +
                  "<a href='javascript:void(0)' class='box-text'>"+data.title+"</a>" +
                  "<div class='delete-todo-item'>" +
                    "<a href='javascript:void(0)'>" +
                      "<i class='material-icons'>delete</i>" +
                    "</a>" +
                  "</div>" +
                "</label>" +
              "</li>"
              $(".todos").append(listdata);
              if (hasData) {
                $("#success-msg").html(msg).show();
                setTimeout(function() { $("#success-msg").hide(); }, 2000);
              }
            });
             $("#addTodoForm")[0].reset();
          }
        })
      }
      else {
        $("#success-msg").html("Please Fill All The Fields").show();
      }
    });

    // Deleteing todo items
    $(document).on('click', '.delete-todo-item', function () {
      var todo_id = $(this).parentsUntil('ul')[1].id;
      $.ajax({
        url: apiUrl+'deletetodo.php',
        type: 'POST',
        dataType: 'json',
        data: {todo_id: todo_id},
        success:function(response){
          var hasData;
          for (var i = 0; i < response.length; i++) {
            hasData = response[i].success;
          }
          if (hasData) {
              $("#"+todo_id).remove();
          }
        }
      });
    });

    $(document).on('click', 'input[type="checkbox"]', function () {
      var isChecked=false;
      isChecked = $(this).is(":checked");
      if(isChecked){
        $(".box-text").css('text-decoration', 'line-through');
      }
      else {
        $(".box-text").css('text-decoration', 'none');
      }
      var todo_id = $(this).parentsUntil('ul')[1].id;
      $.ajax({
        url: apiUrl+'checktodo.php',
        type: 'POST',
        dataType: 'json',
        data: {is_checked : isChecked , todo_id : todo_id},
        success:function(response){
        }
      });
    });
});
