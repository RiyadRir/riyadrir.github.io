// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



// -------------------------------------------------------------
// Collapse menu on click (only for mobile)
// -------------------------------------------------------------

$(function(){
    $(".navbar-collapse a").click(function(){
        $(".navbar-collapse").removeClass("in");
        $(".navbar-collapse").css({'height': '0px'}); 
    });
}());




/*===================================================
Portfolio Isotope
====================================================*/

var $container = $('#container');
// init
$container.isotope({
  // options
  itemSelector: '.item',
  layoutMode: 'fitRows'
});
$('.filters').on( 'click', 'li>a', function() {
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });
});


/*=======================================================
Testimonial Slider
======================================================*/
$(document).ready(function() {

  var owl = $("#owl-tm");     
  owl.owlCarousel({
        items : 2, //10 items above 1000px browser width
        itemsDesktop : [1000,2], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [768,2], //2 items between 600 and 0
        itemsMobile : [640, 1] // itemsMobile disabled - inherit from itemsTablet option
  });
  
});


// -------------------------------------------------------------
// Google Map Customization
// -------------------------------------------------------------

jQuery(function ($) {
    
    'use strict';

    var map;

    map = new GMaps({
        el: '#map-wrapper',
        lat: 23.475719,
        lng: 91.137101,
        scrollwheel:false,
        zoom: 16,
        zoomControl : true,
        panControl : true,
        streetViewControl : true,
        mapTypeControl: false,
        overviewMapControl: false,
        clickable: true
    });

    var image = '';
    map.addMarker({
        lat: 23.475719,
        lng: 91.137101,
        icon: image,
        animation: google.maps.Animation.DROP,
        verticalAlign: 'bottom',
        horizontalAlign: 'center',
        backgroundColor: '#d9d9d9',
    });


    var styles = [ 

    {
        "featureType": "road",
        "stylers": [
        { "color": "#ffffff" }
        ]
    },{
        "featureType": "water",
        "stylers": [
        { "color": "#99b3cc" }
        ]
    },{
        "featureType": "landscape",
        "stylers": [
        { "color": "#f2efe9" }
        ]
    },{
        "elementType": "labels.text.fill",
        "stylers": [
        { "color": "#d3cfcf" }
        ]
    },{
        "featureType": "poi",
        "stylers": [
        { "color": "#bfbfbf" }
        ]
    },{
        "elementType": "labels.text",
        "stylers": [
        { "saturation": 1 },
        { "weight": 0.1 },
        { "color": "#000000" }
        ]
    }

    ];

    map.addStyle({
        styledMapName:"Styled Map",
        styles: styles,
        mapTypeId: "map_style"  
    });

    map.setStyle("map_style");
}());

// -------------------------------------------------------------
// WOW setup
// -------------------------------------------------------------        
jQuery(function ($) {
    var wow = new WOW({
    mobile:       false
    });
    wow.init();
}());
