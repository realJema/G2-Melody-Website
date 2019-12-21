 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: false
 });

jQuery(document).ready(function($) {

	"use strict";

	
	// $(".loader").delay(1000).fadeOut("slow");
 //  $("#overlayer").delay(1000).fadeOut("slow");	
  

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	
	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 4
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1000,
	    autoplay: true,
	    pauseOnHover: false,
	    autoHeight: true,
	    nav: false,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });

	  
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	// siteStellar();

	
	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top
      }, 600, 'easeInOutExpo', function(){
        window.location.hash = hash;
      });

    });
  };
  OnePageNavigation();

  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
  siteScroll();


  var siteIstotope = function() {
  	/* activate jquery isotope */
	  var $container = $('#posts').isotope({
	    itemSelector : '.item',
	    isFitWidth: true
	  });

	  $(window).resize(function(){
	    $container.isotope({
	      columnWidth: '.col-sm-3'
	    });
	  });
	  
	  $container.isotope({ filter: '*' });

	    // filter items on button click
	  $('#filters').on( 'click', 'button', function(e) {
	  	e.preventDefault();
	    var filterValue = $(this).attr('data-filter');
	    $container.isotope({ filter: filterValue });
	    $('#filters button').removeClass('active');
	    $(this).addClass('active');
	  });
  }

  siteIstotope();


  $('.fancybox').on('click', function() {
	  var visibleLinks = $('.fancybox');

	  $.fancybox.open( visibleLinks, {}, visibleLinks.index( this ) );

	  return false;
	});

	$('.small-btn').on('click', function(){
		// shows the number of the song to download
		console.log('initial', $('#montant').val())
		$('#montant').val(250); // change the amount to be for singles 250
		$('#transaction-type').val('single-purchase'); // change the transaction type
		$('#song-title').val($(this).attr('id')); // change the song to download
		$('.descr').html('You are about to make a payment of <b>250frs</b>') //
		console.log('after', $('#montant').val())

	})

	$('.play').on('click', function(){
		// shows the number of the song to download
		console.log('initial', $('#montant').val())
		$('#montant').val(1500); // change the amount to be for album 1500
		$('#transaction-type').val('album-purchase'); // change the transaction type
		$('#song-title').val(0); // change the song to download
		$('.descr').html('You are about to make a payment of <b>1500frs</b>') //
		console.log('after', $('#montant').val())

	})

	$('#formmomo').submit(function(){
		var transaction = $("#transaction-type").val();
		var title = $("#song-title").val();
		$.ajax({
		  url: "https://developer.mtn.cm/OnlineMomoWeb/faces/transaction/transactionRequest.xhtml",
		  type: 'GET',
		  dataType: "jsonp",
		  data : $('#formmomo').serialize(),
		  success: function(){
			console.log('form submitted.');
		},
		error: function ( response ){
			console.log('form not submitted.');
			console.log(transaction)
			console.log(response)
			if(transaction == 'album-purchase'){
				// initiate album download here
				alert('Thank you for Downloading!');
				downloadFile('images/G2Melody_Album.zip', 'G2Melody_Album');
			}
			else if (transaction == 'donating') {
				alert('Thank you for Donating!');
			}
			else if (transaction == 'single-purchase'){
				alert('Thank you for Downloading!');
				if (title == 1) {
					// initiate album download here
					downloadFile('images/G2Melody_Album/G 2____Love.mp3', 'G2Melody_Album');
				}
				else if(title == 2){
					downloadFile('images/G2Melody_Album/G 2____Better_than_life.mp3', 'G2Melody_Album');
				}
				else if(title == 3){
					downloadFile('images/G2Melody_Album/G 2____When We Pray.mp3', 'G2Melody_Album');
				}
				else if(title == 4){
					downloadFile('images/G2Melody_Album/G 2____We Are Better Together.mp3', 'G2Melody_Album');
				}
				else if(title == 5){
					downloadFile('images/G2Melody_Album/G 2____Nothing Without You.mp3', 'G2Melody_Album');
				}
				else if(title == 6 ){
					downloadFile('images/G2Melody_Album/G 2____Haven of Rest_Love lifted me.mp3', 'G2Melody_Album');
				}
				else if(title == 7){
					downloadFile('images/G2Melody_Album/G 2____We Need Peace.mp3', 'G2Melody_Album');
				}
				
			}
			$('#exampleModalCenter').modal('toggle');
		}
		});
		return false;
	});
	// $('.justGet').on('click', function() {
	// 	downloadFile('images/G2Melody_Album.zip', 'G2Melody_Album')
	// })

	function downloadFile(fileURL, fileName) {
		 // for non-IE
		if (!window.ActiveXObject) {
			var save = document.createElement('a');
			save.href = fileURL;
			save.target = '_blank';
			var filename = fileURL.substring(fileURL.lastIndexOf('/')+1);
			save.download = fileName || filename;
			if ( navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search("Chrome") < 0) {
					document.location = save.href; 
	// window event not working here
				}else{
					var evt = new MouseEvent('click', {
						'view': window,
						'bubbles': true,
						'cancelable': false
					});
					save.dispatchEvent(evt);
					(window.URL || window.webkitURL).revokeObjectURL(save.href);
				}	
		}

		// for IE < 11
		else if ( !! window.ActiveXObject && document.execCommand)     {
			var _window = window.open(fileURL, '_blank');
			_window.document.close();
			_window.document.execCommand('SaveAs', true, fileName || fileURL)
			_window.close();
		}
	  }
});
