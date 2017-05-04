
// Desktop Menu Search Button
$(document).ready(function() {
  $('.search-trigger').on('click', function() {
    $('#search-module').addClass('search-module--open');
  });
  $('.close-btn').on('click', function() {
    $('#search-module').removeClass('search-module--open');
  });
});


