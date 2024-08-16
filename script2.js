$(document).ready(function () {
  $.getJSON("data2.json", function (data) {
    $.each(data, function (index, user) {
      $("#user-table tbody").append(
        "<tr><td>" +
          user.id +
          "</td><td>" +
          user.name +
          "</td><td>" +
          user.age +
          "</td><td>" +
          user.department +
          "</td><td>" +
          user.address +
          "</td></tr>"
      );
    });
  });
});
