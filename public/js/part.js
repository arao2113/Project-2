// Get references to page elements
var $submitBtn = $("#submit");
var $itemCategory = $("#item-category");
var $itemName = $("#item-name");
var $itemPrice = $("#item-price");
var $imageURL = $("#image-url");

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
    }
  };

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
    event.preventDefault();
  
    var item = {
        category: $itemCategory.val().trim(),
        name: $itemName.val().trim(),
        price: $itemPrice.val().trim(),
        url: $imageURL.val().trim()
    };
  
    if (!(item.category && item.name && item.price && item.url)) {
        alert("You are missing information!");
        return;
    }
  
    API.saveExample(item)
  
    $itemCategory.val("");
    $itemName.val("");
    $itemPrice.val("");
    $imageURL.val("");
    console.log("test")
};

$submitBtn.on("click", handleFormSubmit);