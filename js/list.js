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
          var listdata = "<li id='"+data.id+"'>" +
            "<label>" +
              "<input type='checkbox'/>" +
              "<span class='box'>"+data.title+"</span>" +
              "<div class='delete-todo-item'>" +
                "<a href='javascript:void(0)'>" +
                  "<i class='material-icons'>delete</i>" +
                "</a>" +
              "</div>" +
            "</label>" +
          "</li>"
          $(".todos").append(listdata);
        });
      }
    });

    // Adding The data
    $("#save_task").click(function(event) {
      event.preventDefault();
      var title = $("#defaultForm-email").val();
      var description = $("#defaultForm-pass").val();
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
                "<span class='box'>"+data.title+"</span>" +
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
});
