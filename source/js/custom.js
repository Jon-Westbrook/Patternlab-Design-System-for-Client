
function checkWidth() {
	var titles_d6_3 = $('body').find($('.d6-truncate3')), //all & large
		titles_d7_2 = $('body').find($('.d7-truncate2')).not($('.sticky-cta .d7-truncate2')), //all & large
		titles_d7_2_sticky = $('body').find($('.sticky-cta .d7-truncate2')), //all & large
		titles_d8_3 = $('body').find($('.d8-truncate3')), //all & large - m19 cols
		titles_d9_1 = $('body').find($('.d9-truncate1')), //all - event urls
		titles_d9_2 = $('body').find($('.d9-truncate2')), //all
		titles_d9_3 = $('body').find($('.d9-truncate3')); //all & large

		if( $(window).width() >= 1000 ) { 
			titles_d6_3.each(function() {
				var string = $(this).text();
				var startIndex = 40;
				var result = [];
				while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 40 ) {
					result.push(startIndex);
					var firstSpaceAfterIndex = result[0];
					var finalString = string.substring(0, firstSpaceAfterIndex);
					finalString+='...';
				}
				$(this).html(finalString);
			});
			titles_d7_2_sticky.each(function() { //sticky 
				var string = $(this).text();
				var startIndex = 105;
				var result = [];
				while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 105 ) {
					result.push(startIndex);
					var firstSpaceAfterIndex = result[0];
					var finalString = string.substring(0, firstSpaceAfterIndex);
					if(firstSpaceAfterIndex < string.length){
						finalString+='...';
					}else{ 
						finalString = finalString;
					}
				}
				$(this).html(finalString);
			});
		} else if( $(window).width() > 767  && $(window).width() < 1000 ) { 
			titles_d6_3.each(function() {
				var string = $(this).text();
				var startIndex = 45;
				var result = [];
				while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 45 ) {
					result.push(startIndex);
					var firstSpaceAfterIndex = result[0];
					var finalString = string.substring(0, firstSpaceAfterIndex);
					finalString+='...';
				}
				$(this).html(finalString);
			});
			titles_d7_2.each(function() {
				var string = $(this).text();
				var startIndex = 99;
				var result = [];
				while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 99 ) {
					result.push(startIndex);
					var firstSpaceAfterIndex = result[0];
					var finalString = string.substring(0, firstSpaceAfterIndex);
					finalString+='...';
				}
				$(this).html(finalString);
			});
			titles_d7_2_sticky.each(function() { //sticky 
				var string = $(this).text();
				var startIndex = 60;
				var result = [];
				while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 60 ) {
					result.push(startIndex);
					var firstSpaceAfterIndex = result[0];
					var finalString = string.substring(0, firstSpaceAfterIndex);
					if(firstSpaceAfterIndex < string.length){
						finalString+='...';
					}else{ 
						finalString = finalString;
					}
				}
				$(this).html(finalString);
			});
		} else if( $(window).width() > 402 && $(window).width() <= 767 ) { 
			titles_d6_3.each(function() {
				var string = $(this).text();
				var startIndex = 55; 
				var result = [];
				while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 55 ) {
					result.push(startIndex);
					var firstSpaceAfterIndex = result[0];
					var finalString = string.substring(0, firstSpaceAfterIndex);
					finalString+='...';
				}
				$(this).html(finalString);
			});
			titles_d7_2.each(function() {
				var dot = '';
				var string = $(this).text();
				var startIndex = 75;
				var result = [];
				while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 75 ) {
					result.push(startIndex);
					var firstSpaceAfterIndex = result[0];
					var finalString = string.substring(0, firstSpaceAfterIndex);
					finalString+='...';
				}
				$(this).html(finalString);
			});
			titles_d7_2_sticky.each(function() { //sticky 
				var string = $(this).text();
				var startIndex = 50;
				var result = [];
				while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 50 ) {
					result.push(startIndex);
					var firstSpaceAfterIndex = result[0];
					var finalString = string.substring(0, firstSpaceAfterIndex);
					if(firstSpaceAfterIndex < string.length){
						finalString+='...';
					}else{ 
						finalString = finalString;
					}
				}
				$(this).html(finalString);
			});
		} else if( $(window).width() > 331 &&  $(window).width() <= 402 ) {
			titles_d6_3.each(function() {
				var string = $(this).text();
				var startIndex = 40;
				var result = [];
				while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 40 ) {
					result.push(startIndex);
					var firstSpaceAfterIndex = result[0];
					var finalString = string.substring(0, firstSpaceAfterIndex);
					finalString+='...';
				}
				$(this).html(finalString);
			});
			titles_d7_2.each(function() {
				var dot = '';
				var string = $(this).text();
				var startIndex = 50;
				var result = [];
				while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 50 ) {
					result.push(startIndex);
					var firstSpaceAfterIndex = result[0];
					var finalString = string.substring(0, firstSpaceAfterIndex);
					finalString+='...';
				}
				$(this).html(finalString);
			});
			titles_d7_2_sticky.each(function() { //sticky 
				var string = $(this).text();
				var startIndex = 28;
				var result = [];
				while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 28 ) {
					result.push(startIndex);
					var firstSpaceAfterIndex = result[0];
					var finalString = string.substring(0, firstSpaceAfterIndex);
					if(firstSpaceAfterIndex < string.length){
						finalString+='...';
					}else{ 
						finalString = finalString;
					}
				}
				$(this).html(finalString);
			});
		} else if( $(window).width() <= 331 ) { // iphone5
			titles_d6_3.each(function() {
				var string = $(this).text();
				var startIndex = 20;
				var result = [];
				while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 20 ) {
					result.push(startIndex);
					var firstSpaceAfterIndex = result[0];
					var finalString = string.substring(0, firstSpaceAfterIndex);
					finalString+='...';
				}
				$(this).html(finalString);
			});
			titles_d7_2.each(function() {
				var dot = '';
				var string = $(this).text();
				var startIndex = 30;
				var result = [];
				while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 30 ) {
					result.push(startIndex);
					var firstSpaceAfterIndex = result[0];
					var finalString = string.substring(0, firstSpaceAfterIndex);
					finalString+='...';
				}
				$(this).html(finalString);
			});
			titles_d7_2_sticky.each(function() { //sticky 
				var string = $(this).text();
				var startIndex = 25;
				var result = [];
				while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 25 ) {
					result.push(startIndex);
					var firstSpaceAfterIndex = result[0];
					var finalString = string.substring(0, firstSpaceAfterIndex);
					if(firstSpaceAfterIndex < string.length){
						finalString+='...';
					}else{ 
						finalString = finalString;
					}
				}
				$(this).html(finalString);
			});
		} // d6-truncate3 & d7-truncate2




		titles_d9_2.each(function() { //image boxes
			var string = $(this).text();
			var startIndex = 50;
			var result = [];
			while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 50 ) {
				result.push(startIndex);
				var firstSpaceAfterIndex = result[0];
				var finalString = string.substring(0, firstSpaceAfterIndex);
				var dot = '<span class="dot">...</span>';
				finalString+=dot;
			}
			$(this).html(finalString);
		});  // d9-truncate2



		if( $(window).width() > 1000 ) {
			$('.tile-text.d7-truncate2').each(function() {
				var string = $(this).text();
				var startIndex = 18;
				var result = [];
				while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 18 ) {
					result.push(startIndex);
					var firstSpaceAfterIndex = result[0];
					var finalString = string.substring(0, firstSpaceAfterIndex);
					finalString+='...';
				}
				$(this).html(finalString);
			});
		} // .tile-text.d7-truncate2



		if( $(window).width() > 600 && $(window).width() < 1000  ) {
			var dot = '';
			titles_d9_1.each(function() {
				var string = $(this).text();
				var urlString = string.replace(string, string.substr(0, 80)); 
				var dot = '<span>...</span>';
				urlString+=dot; 
				$(this).html(urlString);
			});
		} else if( $(window).width() < 600 ) {
			var dot = '';
			titles_d9_1.each(function() {
				var string = $(this).text();
				var urlString = string.replace(string, string.substr(0, 40)); 
				var dot = '<span>...</span>';
				urlString+=dot;  
				$(this).html(urlString);
			});
		}  // d9-truncate1 used on event urls



		if( $(window).width() > 1233  ) {
			titles_d9_3.each(function() {
				var string = $(this).text();
				var startIndex = 124;
				var result = [];
				while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 124 ) {
					result.push(startIndex);
					var firstSpaceAfterIndex = result[0];
					var finalString = string.substring(0, firstSpaceAfterIndex);
					finalString+='...';
				}
				$(this).html(finalString);
			});
		} else if( $(window).width() >= 1000 && $(window).width() <= 1233  ) {
			titles_d9_3.each(function() {
				var string = $(this).text();
				var startIndex = 90;
				var result = [];
				while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 90 ) {
					result.push(startIndex);
					var firstSpaceAfterIndex = result[0];
					var finalString = string.substring(0, firstSpaceAfterIndex);
					finalString+='...';
				}
				$(this).html(finalString);
			});
		} else if( $(window).width() > 402 && $(window).width() <= 999 ) { 
			titles_d9_3.each(function() {
				var string = $(this).text();
				var startIndex = 80;
				var result = [];
				while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 80 ) {
					result.push(startIndex);
					var firstSpaceAfterIndex = result[0];
					var finalString = string.substring(0, firstSpaceAfterIndex);
					finalString+='...';
				}
				$(this).html(finalString);
			});
		} else if( $(window).width() < 401 ) {
			titles_d9_3.each(function() {
				var string = $(this).text();
				var startIndex = 35;
				var result = [];
				while( (startIndex = string.indexOf(' ', startIndex + 1 )) > 35 ) {
					result.push(startIndex);
					var firstSpaceAfterIndex = result[0];
					var finalString = string.substring(0, firstSpaceAfterIndex);
					finalString+='...';
				}
				$(this).html(finalString);
			});
		}  // d9-truncate3
    
}; //checkWidth


//on resize
$(window).on('resize', checkWidth); 




$(function() {

	// on load
	checkWidth();


	//fix stretch image IE
	function objectFitIEFix() {
	    $('img.card-img-right').each(function(){
	        var imgSrc = $(this).attr('src');
	        var fitType = 'cover';

	        $(this).parent().css({ 'background' : 'transparent url("'+imgSrc+'") no-repeat center center/'+fitType, });
	        $(this).parent().addClass('obj-fit-ie');
	        $(this).parent().parent().css('margin-left', '-10px');
	        $(this).remove(); 
	    });
	} //objectFitIEFix
	
	if(!Modernizr.objectfit) {
	    objectFitIEFix();
	}



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

	$('[data-toggle="popover"]').popover({ html: true,  trigger: 'focus',  container:"body" }).on('shown.bs.popover', function (e) {
		var addthisScript = document.createElement('script');
		addthisScript.setAttribute('src', 'http://s7.addthis.com/js/300/addthis_widget.js#domready=1');
		document.body.appendChild(addthisScript);
		var addthis_config = addthis_config||{};
		addthis_config.pubid = 'ra-509abf9a50f845b6';
		setTimeout(function(){ addthis.toolbox('.addthis_toolbox'); }, 400);
		//remove all the others
		$('[data-toggle="popover"]').not(e.target).popover("destroy");
	});

	// Close all popovers on category select
	$('.heroCat').on('click', function() {
		$('[data-toggle="popover"]').popover("destroy");
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


	$('.carousel-item').hover(function() {  //Fix pause ignored in Windows Chrome
	  $(this).carousel('pause'); 
	}, function () { 
	  $(this).carousel('cycle'); 
	});



});


