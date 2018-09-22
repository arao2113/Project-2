var $deletebutton = $("#deletebtn")
var $indvpart = $(".indvpart")
var API = {
  deleteExample: function(id) {
    return $.ajax({
      url: "api/part/" + id,
      type: "DELETE"
    });
  }
}
var handleDeleteBtnClick = function() {
    console.log("test");
    var idToDelete = $indvpart.attr("data-id");
    API.deleteExample(idToDelete).then(function() {
        alert("Thank you for your purchase!");
        window.location.href = "/"
    });

  };
  
  // Add event listeners to the submit and delete buttons
  $deletebutton.on("click", handleDeleteBtnClick)