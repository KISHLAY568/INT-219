$(document).ready(function () {
  // Function to update elements when the button is clicked
  $("#updateButton").click(function () {
    // Select all elements with the name "tcol1" and update their content
    $('[name="tcol1"]').html("Updated Content");

    // Example: Update the class of the selected elements
    $('[name="tcol1"]').removeClass("bold").addClass("updated");
  });
});
