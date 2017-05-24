
// Desktop Menu Search Button
$(document).ready(function() {
  $('.search-trigger').on('click', function() {
    $('#search-module').addClass('search-module--open');
  });
  $('.close-btn').on('click', function() {
    $('#search-module').removeClass('search-module--open');
  });

  // Filter Panel Close Button
  $('.close').on('click', function() {
    $('#filterPanel').collapse('hide');
  });

  // Filter Panel - Check a checkbox, and set a checkbox to indeterminate
  $('.checked').prop('checked', true);
  $('.indeterminate').prop('indeterminate', true);

});


