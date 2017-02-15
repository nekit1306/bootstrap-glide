/*!
 * GLide - Multi-Purpose Bootstrap Theme
 * Theme is developed by Vita Creative (http://www.vitacreative.net)
 * Copyright 2015 . All Rights Reserved.
 */


// Preloading animation
$(window).load(function() {
    // start up after window is loaded
    $('.animatedLoading').fadeOut(500);
});


$(document).ready(function () {


    // Fix Navigation Bar to the top when page is already scrolled

    if ($(this).scrollTop() > ($('#section-services').offset().top - 70)) {

        $('nav').addClass('navbar-fixed-top');

    }


    // Initialize vegas.js Background Slider
    $("#section-home").vegas({

        // All Background images should be inserted here
        slides: [
            { src: "public/img/bg.jpg" },
            { src: "public/img/bg2.jpg" },
            { src: "public/img/bg3.jpg" }
        ],
        transition: 'zoomOut',
        transitionDuration: 5000,
        delay:10000
    });



    // Initialize mixItUp.js Sorting Animations for Portfolio Gallery

    $('#Container').mixItUp();



    // Initialize WOW.js Scrolling Animations

    new WOW().init();


    // Contact Form Validation Plugin

    $("#signupForm").validate({
        rules: {
            // Email validation
            email: {
                email: true
            }
        }
    });


    // Owl Carousel Plugin in Testimonial Section
	
	$('#tm').owlCarousel({
        items : 1 ,
        singleItem:true,
        touchDrag: false,
        mouseDrag:false,
        transitionStyle : "backSlide",
        navigation: true,
        navigationText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ]
	});



    // Owl Carousel Plugin in About Section

    $('#au').owlCarousel({
        items : 1,
        pagination: false,
        touchDrag: false,
        mouseDrag:false,
        transitionStyle : "fadeUp",
        singleItem:true
    });



    // Highlight and Underline Sorting list items on click in Portfolio Section

    $('.filters .filters-list a').click(function(e){
        e.preventDefault();
        $('.filters-list .active').removeClass('active');
        $(this).parent().addClass('active');
    });




    // jQuery for page scrolling feature - requires jQuery Easing plugin

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });



    // Fix Navigation Bar to the top when scroll down

	$(window).scroll(function(){
        if ($(this).scrollTop() > ($('#section-services').offset().top - 70)) {

            $('nav').addClass('navbar-fixed-top');

        } else {

            $('nav').removeClass('navbar-fixed-top');

        }
    });

    // Highlight the top nav as scrolling occurs

    $('body').scrollspy({
        target: '#main-navigation',
        offset: 68
    });


    // Zoom Plugin for Portfolio images in Portfolio Section
	
	$('#section-portfolio').magnificPopup({
        delegate: '.project-zoom',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>Photography, Design</small>';
            }
        }
	});


    // Zoom Plugin for Portfolio images in Footer Top section

    $('#footer-top').magnificPopup({
        delegate: '.project-zoom',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>Photography, Design</small>';
            }
        }
    });



    // Change Side Image after accordion is shown in About Section

    $('#accordion').on('shown.bs.collapse', function () {

        var index = $('#accordion .in').parent().index();
        $('#au').trigger("owl.goTo", index);
    });


    /*
     * Parallax for Pricing,Contact subsections and Contact Section.
     * Use data-speed in index.html file to change parallax speed.
     */

    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this);
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
            var coords = 'center '+ yPos + 'px';
            $bgobj.css({ backgroundPosition: coords });
        });
    });


});