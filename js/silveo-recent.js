var section = 0; // Active section
var windowHeight = 0; // The window height (lets hope they don't resize)
var windowWidth = 0;  // The window width
var curpos=0;
var animated= false;
// SCROLL BACK TO TOP BEFORE UNLOADING PAGE -> ENSURE ON TOP AT EVERY LOADING
/*$(window).on('beforeunload', function(){
  $(this).scrollTop(0);
});*/

// WHEN DOM IS READY
$(document).ready(function() {
  windowHeight = $(window).height();
  windowWidth = $(window).width();

  // Scroll back to top (just making sure)
  $(this).scrollTop(0);

  // prepare menu
  $('#closer').hide();
  $("#menuopener").click(function(){
    $('body').toggleClass('navigation-active');
    setTimeout(function()
      {$('#opener').toggle();
      $('#closer').toggle();}, 300);
  });

  $('.one-section').css("min-height", windowHeight);
});
