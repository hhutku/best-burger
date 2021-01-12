
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



   
});

