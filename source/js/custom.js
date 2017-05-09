
// Desktop Menu Search Button
$(document).ready(function() {
  $('.search-trigger').on('click', function() {
    $('#search-module').addClass('search-module--open');
  });
  $('.close-btn').on('click', function() {
    $('#search-module').removeClass('search-module--open');
  });

  // Global Search Red Underline
  document.getElementById("search-module-input").onkeyup = function() {
    document.getElementById("highlight").innerHTML = this.value;   
  };

});


