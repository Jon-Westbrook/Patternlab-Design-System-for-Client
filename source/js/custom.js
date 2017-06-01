
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

  // Sticky Desktop CTA Bar
  var heroHeight,
      headerHeight,
      totalHeight,
      ctaHeight;

  $(window).on('scroll resize', function() {
    heroHeight = $('.event-hero').outerHeight();
    headerHeight = $('.glob-header').outerHeight();
    totalHeight = heroHeight + headerHeight;
    ctaHeight = $('.sticky-cta').outerHeight();
  });

  $(window).scroll(function () {
      
      if ($(window).scrollTop() > totalHeight) {
        $('.sticky-cta').addClass('fixed-top');
        $('.event-overview').css('margin-top', ctaHeight);
        $('.sticky-title').css('opacity', 1);
      }
    
      if ($(window).scrollTop() < totalHeight) {
        $('.sticky-cta').removeClass('fixed-top');
        $('.event-overview').css('margin-top', 0);
        $('.sticky-title').css('opacity', 0);
      }
  });

  $('.top').on('click', function(event){
    event.preventDefault();
    $("html, body").animate({ scrollTop: "0" });
  });

});
