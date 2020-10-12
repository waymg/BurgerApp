$(function () {
    $(".change-devoured").on("click", function (event) {
      var id = $(this).data("id");
      var newdevoured = $(this).data("newdevoured");
  
      var newDevouredState = {
        devoured: newdevoured,
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState,
      }).then(function () {
        console.log("changed devoured to", newdevoured);
        location.reload();
      });
    });
  
    $(".create-form").on("submit", function (event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burgerApp").val().trim(),
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        console.log("created new burger");
        location.reload();
      });
    });
  
    $(".delete-burger").on("click", function (event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(function () {
        console.log("deleted burger", id);
        location.reload();
      });
    });
  });