

$(document).ready(function() {
  $('#desktop-menu-search-icon').on('click', function() {
    $('#search-module').removeClass('search-module');
    $('#search-module').addClass('search-module--open');
  });
  $('.close-btn').on('click', function() {
    $('#search-module').removeClass('search-module--open');
    $('#search-module').addClass('search-module');
  });


});


