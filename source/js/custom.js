
// Desktop Menu Search Button
$(function() {
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
			$('.offset-sticky').css('margin-top', ctaHeight);
			$('.sticky-title').css('opacity', 1);
		}
	
		if ($(window).scrollTop() < totalHeight) {
			$('.sticky-cta').removeClass('fixed-top');
			$('.offset-sticky').css('margin-top', 0);
			$('.sticky-title').css('opacity', 0);
		}
	});

	$('.top').on('click', function(event){
		event.preventDefault();
		$("html, body").animate({ scrollTop: "0" });
	});

	// Enable HTML in Popovers and Tooltips
	$('[data-toggle="tooltip"]').tooltip({html: true});

	$('[data-toggle="popover"]').popover({ html: true }).on('shown.bs.popover', function () {
		var addthisScript = document.createElement('script');
		addthisScript.setAttribute('src', 'http://s7.addthis.com/js/300/addthis_widget.js#domready=1');
		document.body.appendChild(addthisScript);
		var addthis_config = addthis_config||{};
		addthis_config.pubid = 'ra-509abf9a50f845b6';
		setTimeout(function(){ addthis.toolbox('.addthis_toolbox'); }, 400);
	});


	// Megamenu
	var timeout;
	$('.nav-tabs .nav-link').on('mouseover', function() {
		clearTimeout(timeout);
		var panelID = $(this).data('target');
		$('.nav-link').removeClass('active');
		$(this).addClass('active');
		if ( !$(panelID).is(':visible') ) {
			$('.tab-content-megaMenu').fadeIn('fast');
			$('.megaMenu').hide();
			$(panelID).fadeIn('fast');
		}
	});

	$('.megaMenu').on('mouseleave', function() {
		timeout = setTimeout(function(){ 
			$('.tab-content-megaMenu').fadeOut('fast');
			$('.megaMenu').fadeOut('fast');
		}, 1000);
	});


	// jQuery UI Datepicker Init
	$( "#datepicker" ).datepicker();


	//toggle the grayscale
	$('.grayscale, .grayscale.replaced').hover(function(){
		$(this).addClass('grayscale-off');
	}, function() {
		$(this).removeClass('grayscale-off');
	});


});
