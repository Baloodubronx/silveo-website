var section = 0; // Active section
var windowHeight = 0; // The window height (lets hope they don't resize)
var windowWidth = 0;  // The window width
var curpos=0;

// SCROLL BACK TO TOP BEFORE UNLOADING PAGE -> ENSURE ON TOP AT EVERY LOADING
$(window).on('beforeunload', function(){
  $(this).scrollTop(0);
});

// WHEN DOM IS READY
$(document).ready(function() {
  windowHeight = $(window).height();
  windowWidth = $(window).width();

  // Scroll back to top (just making sure)
  $(this).scrollTop(0);

});



$(document).on('scroll', function(){


});
