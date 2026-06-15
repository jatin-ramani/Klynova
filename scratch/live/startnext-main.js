(function($){
	"use strict";
	jQuery(document).on('ready', function () {
		// Feather Icon Js
		feather.replace();

        // Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "991"
		});

		$(".mean-container .mean-nav ul li .nav-link").on('click', function(e) {
			let menulink = $(this).attr('href');
			if (menulink.startsWith('#')) {
				if (!$(this).hasClass('dropdown-toggle')) {
					$(".float-menu-modal.modal-right .modal-content .modal-header .close").click();
				} 
			}
		});
         
        // Dropdown menu
        $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');
            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
                $('.dropdown-submenu .show').removeClass("show");
            });
            return false;
        });

		$(window).on('scroll',function() {
			// Hero Slider
			$('.hero-slider').owlCarousel({
				items: 1,
				loop: true,
				nav: true,
				dots: false,
				mouseDrag: false,
				autoplay:true,
				autoplayHoverPause: true,
				autoplayTimeout:4000,
				smartSpeed:1000,
				navText: [
					"<i class='fa fa-angle-left'></i>",
					"<i class='fa fa-angle-right'></i>"
				],
				responsive:{
					0:{
						autoHeight:true,
					},
					768:{
						autoHeight:false,
					}
				}
			});

			$(".hero-slider").on("translate.owl.carousel", function(){
				$(".hosting-main-banner h1, .hosting-main-banner p").removeClass("startnext_animated fadeInUp").css("opacity", "0");
				$(".hosting-main-banner .btn").removeClass("startnext_animated fadeInDown").css("opacity", "0");
				$(".hosting-main-banner .slider-image").removeClass("startnext_animated pulse").css("opacity", "0");
			});
			
			$(".hero-slider").on("translated.owl.carousel", function(){
				$(".hosting-main-banner h1, .hosting-main-banner p").addClass("startnext_animated fadeInUp").css("opacity", "1");
				$(".hosting-main-banner .btn").addClass("startnext_animated fadeInDown").css("opacity", "1");
				$(".hosting-main-banner .slider-image").addClass("startnext_animated pulse").css("opacity", "1");
			});

			// ML Feedback Slides
			var owl = $(".ml-feedback-slides");
			owl.owlCarousel({
				loop: false,
				nav: false,
				dots: true,
				autoplay: true,
				smartSpeed: 1000,
				autoplayTimeout: 5000,
				items: 1,
				animateOut: 'fadeOut',
			});

			// ML Projects Slides
			var owl = $(".ml-projects-slides");
			owl.owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				autoplay: true,
				smartSpeed: 1000,
				margin: 30,
				autoplayTimeout: 5000,
				responsive: {
					0:{
						items: 1,
					},
					576:{
						items: 2,
					},
					768:{
						items: 2,
					},
					1024:{
						items: 3,
					},
					1200:{
						items: 4,
					}
				},
			});

			// Agency Portfolio Home Slides
			var owl = $(".agency-portfolio-home-slides");
			owl.owlCarousel({
				loop: true,
				nav: true,
				dots: false,
				autoplay: true,
				smartSpeed: 1000,
				autoplayTimeout: 5000,
				items: 1,
				animateOut: 'fadeOut',
				navText: [
					"<i class='fas fa-chevron-left'></i>",
					"<i class='fas fa-chevron-right'></i>"
				],
			});

			// Blog Slides
			var owl = $(".blog-slides");
			owl.owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				autoplay: true,
				smartSpeed: 1000,
				margin: 30,
				autoplayTimeout: 5000,
				responsive: {
					0:{
						items: 1,
					},
					768:{
						items: 2,
					},
					1024:{
						items: 3,
					},
					1200:{
						items: 3,
					}
				},
			});

			// Agency Portfolio Feedback Slides
			var owl = $(".agency-portfolio-feedback-slides");
			owl.owlCarousel({
				loop: false,
				nav: false,
				dots: true,
				autoplay: true,
				smartSpeed: 1000,
				autoplayTimeout: 5000,
				items: 1,
			});

			// Agency Portfolio-Partner Slides
			var owl = $(".agency-portfolio-partner-slides");
			owl.owlCarousel({
				loop: true,
				nav: false,
				dots: false,
				margin: 30,
				autoplay: true,
				smartSpeed: 1000,
				autoplayTimeout: 5000,
				responsive: {
					0:{
						items:2,
					},
					576:{
						items:4,
					},
					768:{
						items:4,
					},
					1200:{
						items:6,
					}
				}
			});

			// Partner Slides
			var owl = $(".partner-slides");
			owl.owlCarousel({
				loop: true,
				nav: false,
				dots: false,
				autoplay: true,
				smartSpeed: 1000,
				autoplayTimeout: 5000,
				responsive: {
					0:{
						items:2,
					},
					768:{
						items:4,
					},
					1200:{
						items:6,
					}
				}
			});

			// Testimonials Slides
			var owl = $(".testimonials-slides");
			owl.owlCarousel({
				loop: false,
				nav: false,
				dots: true,
				autoplay: true,
				smartSpeed: 1000,
				autoplayTimeout: 5000,
				items: 1,
			});

			// Works Slides
			if(typeof(frontend_ajax_object) != "undefined" && frontend_ajax_object !== null) {
				var team_slide = frontend_ajax_object.team_slide;
				var work_slide  = frontend_ajax_object.work_slide;
	
			}else{
				var work_slide = 4;
				var team_slide = 5;
			}
	
			var owl = $('.works-slides');
			owl.owlCarousel({
				loop:true,
				nav:false,
				autoplay: true,
				dots:false,
				responsive:{
					0:{
						items:1,
					},
					768:{
						items:2,
					},
					1200:{
						items:3,
					},
					1500:{
						items:work_slide,
					}
				}
			});

			// Team Slides
			var owl = $(".owl-carousel");
			owl.owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				autoplay: false,
				smartSpeed: 1000,
				autoplayTimeout: 5000,
				responsive: {
					0:{
						items:1,
					},
					768:{
						items:2,
					},
					1200:{
						items:4,
					},
					1500:{
						items:team_slide,
					}
				}
			});

			// Home SaaS, Home FinTech, Home HealthTech Styles

			// saas-partner-slider
			$('.saas-partner-slider').owlCarousel({
				loop: true,
				nav: false,
				dots: false,
				autoplayHoverPause: true,
				autoplay: true,
				margin:30,
				responsive: {
					0: {
						items: 1
					},
					300: {
						items: 2
					},
					500: {
						items: 3
					},
					992: {
						items: 4
					},
					1400: {
						items: 6
					},
					1600: {
						items: 7
					}
				}
			});

			// saas-feedback-slider
			$('.saas-feedback-slider').owlCarousel({
				items: 1,
				loop: true,
				nav: false,
				dots: true,
				autoplayHoverPause: true,
				autoplay: true,
				autoHeight: true,
			});

			// fintech-feedback-slider
			$('.fintech-partner-slider').owlCarousel({
				loop: true,
				nav: false,
				dots: false,
				autoplayHoverPause: true,
				autoplay: true,
				margin:100,
				responsive: {
					0: {
						items: 1,
						margin: 50
					},
					300: {
						items: 2,
						margin: 50
					},
					500: {
						items: 3,
						margin: 50
					},
					992: {
						items: 4,
						margin: 50
					},
					1400: {
						items: 6,
						margin: 50
					},
					1600: {
						items: 7
					}
				}
			});

			// fintech-testimonials-slider
			$('.fintech-testimonials-slider').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				autoplayHoverPause: true,
				autoplay: true,
				margin:25,
				autoHeight: true,
				
				responsive: {
					0: {
						items: 1, 
					},
					1200: {
						items: 2,
					},
				}
			});

			// health-tech-services-slider
			$('.health-tech-services-slider').owlCarousel({
				loop: true,
				nav: true,
				dots: true,
				autoplayHoverPause: true,
				autoplay: true,
				margin:25,
				autoHeight: true,
				
				responsive: {
					0: {
						items: 1, 
					}, 
					768: {
						items: 2,
					},
					1200: {
						items: 3,
					},
				}
			});

			// health-tech-testimonials-slider
			$('.health-tech-testimonials-slider').owlCarousel({
				items: 1, 
				loop: true,
				nav: true,
				dots: true,
				autoplayHoverPause: true,
				autoplay: true,
				autoHeight: true,
			});
			// End Home SaaS, Home FinTech, Home HealthTech Styles
		});

		// Magnific Popup
		$('.popup-youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		// Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.startp-nav').addClass("is-sticky");
            }
            else{
                $('.startp-nav').removeClass("is-sticky");
            }
		});

		// Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('#header').addClass("is-sticky");
            }
            else{
                $('#header').removeClass("is-sticky");
            }
		});
		let headerElement = document.querySelector('.headroom');
		if (headerElement){
			let headroom = new Headroom(headerElement, {
				offset: 100
			});
			headroom.init();
		}

        // Popup Gallery
		$('.popup-btn').magnificPopup({
            type: 'image',
            gallery:{
                enabled:true
            }
		});

		// Boxes Slides
		var owl = $('.boxes-slides');
		owl.owlCarousel({
			loop:true,
			nav:false,
			autoplay: true,
			dots:false,
			responsive:{
				0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                1200:{
                    items:4,
                }
			}
		});
		owl.on('mousewheel', '.owl-stage', function (e) {
			if (e.deltaY>0) {
				owl.trigger('next.owl');
			} else {
				owl.trigger('prev.owl');
			}
			e.preventDefault();
		});

		// Feedback Carousel
		var $imagesSlider = $(".feedback-slides .client-feedback>div"),
		$thumbnailsSlider = $(".client-thumbnails>div");

		// images options
		$imagesSlider.slick({
			speed:300,
			slidesToShow:1,
			slidesToScroll:1,
			cssEase:'linear',
			fade:true,
			autoplay: true,
			draggable:true,
			asNavFor:".client-thumbnails>div",
			prevArrow:'.client-feedback .prev-arrow',
			nextArrow:'.client-feedback .next-arrow'
		});

		// Thumbnails options
		$thumbnailsSlider.slick({
			speed:300,
			slidesToShow:5,
			slidesToScroll:1,
			cssEase:'linear',
			autoplay: true,
			centerMode:true,
			draggable:false,
			focusOnSelect:true,
			asNavFor:".feedback-slides .client-feedback>div",
			prevArrow:'.client-thumbnails .prev-arrow',
			nextArrow:'.client-thumbnails .next-arrow',
		});
		var $caption = $('.feedback-slides .caption');

		var captionText = $('.client-feedback .slick-current img').attr('alt');
		updateCaption(captionText);
		$imagesSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$caption.addClass('hide');
		});

		$imagesSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
			captionText = $('.client-feedback .slick-current img').attr('alt');
			updateCaption(captionText);
		});

		function updateCaption(text) {
			// if empty, add a no breaking space
			if (text === '') {
				text = '&nbsp;';
			}
			$caption.html(text);
			$caption.removeClass('hide');
		}
		
		// Go to Top
        $(function(){
            //Scroll event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 300) $('.go-top').fadeIn('slow');
                if (scrolled < 300) $('.go-top').fadeOut('slow');
            });  
            //Click event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
		});
		
		// FAQ Accordion
        $(function() {
            $('.accordion').find('.accordion-title').on('click', function(){
                // Adds Active Class
                $(this).toggleClass('active');
                // Expand or Collapse This Panel
                $(this).next().slideToggle('fast');
                // Hide The Other Panels
                $('.accordion-content').not($(this).next()).slideUp('fast');
                // Removes Active Class From Other Titles
                $('.accordion-title').not($(this)).removeClass('active');		
            });
        });

         // Masonry
        jQuery('.grid').masonry({
            itemSelector: '.grid-item'
        });

		/* Start Home Seven */

			// Tabs JS
			(function ($) {
				$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
				$('.tab ul.tabs li a').on('click', function (g) {
					var tab = $(this).closest('.tab'), 
					index = $(this).closest('li').index();
					tab.find('ul.tabs > li').removeClass('current');
					$(this).closest('li').addClass('current');
					tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
					tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
					g.preventDefault();
				});
			})(jQuery);

		/* End Home Seven */
		
		// imagesLoaded
		$('.grid').imagesLoaded(function() {
			// filter items on button click
			$('.shorting-menu').on('click', 'button', function() {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({
					filter: filterValue
				});
			});
		});

		// Shorting Menu
		$('.shorting-menu button').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

		// Isotop Js
        var $grid = $('.projects-items').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item'
            }
        });
	});
	
	$(window).on ('load', function (){
        // WOW JS
        if ($(".wow").length) { 
            var wow = new WOW({
            boxClass:     'wow',      // startnext_animated element css class (default is wow)
            animateClass: 'startnext_animated', // animation css class (default is startnext_animated)
            offset:       20,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
          });
          wow.init();
        }
	});
	
	// Preloader Area
	jQuery(window).on('load', function() {
		$('.preloader').fadeOut();
    });
    
    //Counter
    jQuery(document).on('ready', function() {
        $('.odometer').appear(function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
	});
	
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/StartNext_Team.default', function($scope, $){
			// Team Slides
			var owl = $(".team-slider");
			owl.owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				autoplay: false,
				smartSpeed: 1000,
				autoplayTimeout: 5000,
				responsive: {
					0:{
						items:1,
					},
					768:{
						items:2,
					},
					1200:{
						items:4,
					},
					1500:{
						items:5,
					}
				}
			});
		});
	});

	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/StartNext_Banner_One.default', function($scope, $){
			$(window).on ('load', function (){
				// WOW JS
				if ($(".wow").length) { 
					var wow = new WOW({
					boxClass:     'wow',      // startnext_animated element css class (default is wow)
					animateClass: 'startnext_animated', // animation css class (default is startnext_animated)
					offset:       20,          // distance to the element when triggering the animation (default is 0)
					mobile:       true,       // trigger animations on mobile devices (default is true)
					live:         true,       // act on asynchronously loaded content (default is true)
				});
				wow.init();
				}
			});
		});
	});

	// Boxes Slides
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Features_Box.default', function($scope, $){
			var owl = $('.boxes-slides');
			owl.owlCarousel({
				loop:true,
				nav:false,
				autoplay: true,
				dots:false,
				responsive:{
					0:{
						items:1,
					},
					768:{
						items:2,
					},
					1200:{
						items:4,
					}
				}
			});
	
		});
	});

	// Partner Slides
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Partner_Logo.default', function($scope, $){
			var owl = $(".partner-slides");
			owl.owlCarousel({
				loop: true,
				nav: false,
				dots: false,
				autoplay: true,
				smartSpeed: 1000,
				autoplayTimeout: 5000,
				responsive: {
					0:{
						items:2,
					},
					768:{
						items:4,
					},
					1200:{
						items:6,
					}
				}
			});
	
		});
	});

	// ML Projects Slides
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Recent_Work.default', function($scope, $){
			var owl = $(".ml-projects-slides");
			owl.owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				autoplay: true,
				smartSpeed: 1000,
				margin: 30,
				autoplayTimeout: 5000,
				responsive: {
					0:{
						items: 1,
					},
					576:{
						items: 2,
					},
					768:{
						items: 2,
					},
					1024:{
						items: 3,
					},
					1200:{
						items: 4,
					}
				},
			});

			// Works Slides
			if(typeof(frontend_ajax_object) != "undefined" && frontend_ajax_object !== null) {
				var team_slide = frontend_ajax_object.team_slide;
				var work_slide  = frontend_ajax_object.work_slide;
	
			}else{
				var work_slide = 4;
				var team_slide = 5;
			}
	
			var owl = $('.works-slides');
			owl.owlCarousel({
				loop:true,
				nav:false,
				autoplay: true,
				dots:false,
				responsive:{
					0:{
						items:1,
					},
					768:{
						items:2,
					},
					1200:{
						items:3,
					},
					1500:{
						items:work_slide,
					}
				}
			});
		});
	});

	// Tabs JS
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/StartNext_Pricing_Table.default', function($scope, $){
			(function ($) {
				$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
				$('.tab ul.tabs li a').on('click', function (g) {
					var tab = $(this).closest('.tab'), 
					index = $(this).closest('li').index();
					tab.find('ul.tabs > li').removeClass('current');
					$(this).closest('li').addClass('current');
					tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
					tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
					g.preventDefault();
				});
			})(jQuery);
		});
	});

	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Testimonial.default', function($scope, $){

			// ML Feedback Slides
			var owl = $(".ml-feedback-slides");
			owl.owlCarousel({
				loop: false,
				nav: false,
				dots: true,
				autoplay: true,
				smartSpeed: 1000,
				autoplayTimeout: 5000,
				items: 1,
				animateOut: 'fadeOut',
			});

			// Agency Portfolio Feedback Slides
			var owl = $(".agency-portfolio-feedback-slides");
			owl.owlCarousel({
				loop: false,
				nav: false,
				dots: true,
				autoplay: true,
				smartSpeed: 1000,
				autoplayTimeout: 5000,
				items: 1,
			});

		});
	});

	// Agency Portfolio Home Slides
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/StartNext_Slider_Two.default', function($scope, $){

			var owl = $(".agency-portfolio-home-slides");
			owl.owlCarousel({
				loop: true,
				nav: true,
				dots: false,
				autoplay: true,
				smartSpeed: 1000,
				autoplayTimeout: 5000,
				items: 1,
				animateOut: 'fadeOut',
				navText: [
					"<i class='fas fa-chevron-left'></i>",
					"<i class='fas fa-chevron-right'></i>"
				],
			});
		});
	});

	// Agency Portfolio-Partner Slides
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/global', function( $scope ) {
			var owl = $(".agency-portfolio-partner-slides");
			owl.owlCarousel({
				loop: true,
				nav: false,
				dots: false,
				margin: 30,
				autoplay: true,
				smartSpeed: 1000,
				autoplayTimeout: 5000,
				responsive: {
					0:{
						items:2,
					},
					576:{
						items:4,
					},
					768:{
						items:4,
					},
					1200:{
						items:6,
					}
				}
			});
		});
	});

	// Blog Slides
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/StartNextBlogPostSlider.default', function($scope, $){

			var owl = $(".blog-slides");
			owl.owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				autoplay: true,
				smartSpeed: 1000,
				margin: 30,
				autoplayTimeout: 5000,
				responsive: {
					0:{
						items: 1,
					},
					768:{
						items: 2,
					},
					1024:{
						items: 3,
					},
					1200:{
						items: 3,
					}
				},
			});

			// Home SaaS, Home FinTech, Home HealthTech Styles

			// saas-partner-slider
			$('.saas-partner-slider').owlCarousel({
				loop: true,
				nav: false,
				dots: false,
				autoplayHoverPause: true,
				autoplay: true,
				margin:30,
				responsive: {
					0: {
						items: 1
					},
					300: {
						items: 2
					},
					500: {
						items: 3
					},
					992: {
						items: 4
					},
					1400: {
						items: 6
					},
					1600: {
						items: 7
					}
				}
			});

			// saas-feedback-slider
			$('.saas-feedback-slider').owlCarousel({
				items: 1,
				loop: true,
				nav: false,
				dots: true,
				autoplayHoverPause: true,
				autoplay: true,
				autoHeight: true,
			});

			// fintech-feedback-slider
			$('.fintech-partner-slider').owlCarousel({
				loop: true,
				nav: false,
				dots: false,
				autoplayHoverPause: true,
				autoplay: true,
				margin:100,
				responsive: {
					0: {
						items: 1,
						margin: 50
					},
					300: {
						items: 2,
						margin: 50
					},
					500: {
						items: 3,
						margin: 50
					},
					992: {
						items: 4,
						margin: 50
					},
					1400: {
						items: 6,
						margin: 50
					},
					1600: {
						items: 7
					}
				}
			});

			// fintech-testimonials-slider
			$('.fintech-testimonials-slider').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				autoplayHoverPause: true,
				autoplay: true,
				margin:25,
				autoHeight: true,
				
				responsive: {
					0: {
						items: 1, 
					},
					1200: {
						items: 2,
					},
				}
			});

			// health-tech-services-slider
			$('.health-tech-services-slider').owlCarousel({
				loop: true,
				nav: true,
				dots: true,
				autoplayHoverPause: true,
				autoplay: true,
				margin:25,
				autoHeight: true,
				
				responsive: {
					0: {
						items: 1, 
					}, 
					768: {
						items: 2,
					},
					1200: {
						items: 3,
					},
				}
			});

			// health-tech-testimonials-slider
			$('.health-tech-testimonials-slider').owlCarousel({
				items: 1, 
				loop: true,
				nav: true,
				dots: true,
				autoplayHoverPause: true,
				autoplay: true,
				autoHeight: true,
			});
			// End Home SaaS, Home FinTech, Home HealthTech Styles
		});
	});
	
}(jQuery));