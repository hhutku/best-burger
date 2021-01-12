
$(() => {
    $("#submit").on("click", event => {
      event.preventDefault();
      const newBurger = {
        name: $("#burgerId").val().trim(),
        devoured: 0
      };
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(() => {
        location.reload();
      });
    });

    
    $(".list").on("click", function (event) {
      event.preventDefault(); 
      var id = $(this).data("id");
      var newDevour =! $(this).data("devoured");
  
      var newDState = {
        devoured: newDevour
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDState
      }).then(
        function () {
          
          location.reload();
        }
      );
    });

    $(".delete").on("click", function(event){
      const burgerId = $(this).data("id"); 
      $.ajax("/api/burgers/"+burgerId, {
          type: "DELETE"
      }).then(
          function(){
              console.log(`deleted burger id: ${burgerId}`); 
              location.reload(); 
          }
      )
  })



   
});

