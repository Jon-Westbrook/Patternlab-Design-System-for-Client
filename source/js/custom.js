
// Desktop Menu Search Button
$(document).ready(function() {
  $('.search-trigger').on('click', function() {
    $('#search-module').addClass('search-module--open');
  });
  $('.close-btn').on('click', function() {
    $('#search-module').removeClass('search-module--open');
  });

  // $("#search-module-input").keyup(function() {
  //   var x = document.getElementById("search-module-input").value;
  //   $(".search-input__highlight").html(x);
  // });

});


