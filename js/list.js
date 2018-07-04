var apiUrl = "http://192.168.1.121/nitesh/todoApp/";
$(document).ready(function() {
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
                "<a href='#'>" +
                  "<i class='material-icons'>delete</i>" +
                "</a>" +
              "</div>" +
            "</label>" +
          "</li>"
          $(".todos").append(listdata);
        });
      }
    })

});
