// Get references to page elements
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(item) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/part",
      data: JSON.stringify(item)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/part",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/part/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(item) {
      
      var $maindiv = $("<div>")
        .attr({
          class: "card partcard",
          "data-id": item.id
        })

      var $img = $("<img>")
        .attr({ 
          src: item.url,
          class: "card img-top partimg"
        })
      
      var $cardbody = $("<div>")
        .attr({
          class: "card-body"
        })
      
      $maindiv.append($img)
      $maindiv.append($cardbody)
      
      var $title = $("<h5>")
        .attr("class", "card-title")
        .text(item.name)

      var $category = $("<p>")
        .attr("class", "card-text")
        .text("Category: " + item.category)

      var $price = $("<p>")
        .attr("class", "card-text")
        .text("Price: $" + item.price)
      
      var $a = $("<a>")
        .text("Select")
        .attr({
          href: "/part/" + item.id,
          class:"btn btn-primary"
        });
      
      $cardbody.append($title)
      $cardbody.append($category)
      $cardbody.append($price)
      $cardbody.append($a)


      // var $button = $("<button>")
      //   .addClass("btn btn-danger float-right delete")
      // //   .text("ｘ");
      

      // // $maindiv.append($button);

      return $maindiv;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};
refreshExamples();

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$exampleList.on("click", ".delete", handleDeleteBtnClick);
