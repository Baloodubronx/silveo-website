var section = 0; // Active section
var windowHeight = 0; // The window height (lets hope they don't resize)
var windowWidth = 0;  // The window width
var curpos=0;
var animated= false;
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

  // prepare menu
  $('#closer').hide();
  $("#menuopener").click(function(){
    $('body').toggleClass('navigation-active');
    setTimeout(function()
      {$('#opener').toggle();
      $('#closer').toggle();}, 300);
  });

  $('.one-section').height(windowHeight);
  $('body').bind('mousewheel DOMMouseScroll onmousewheel touchmove scroll', checkScrolling);
});


function scrollUp() {
  if (!animated) {
    animated=true;
    var pos = $('body').scrollTop();
    $('body').animate({scrollTop: pos-windowHeight}, 500, animadone);
  }
}

function scrollDown() {
  if (!animated) {
    animated=true;
    var pos = $('body').scrollTop();
    $('body').animate({scrollTop: pos+windowHeight}, 500, animadone);
  }

  /*$('.logo-container').css(
    {
      'background': 'url(images/bg.png)',
      'background-position': '50% 50%'
    } );*/
}

function animadone() {
  setTimeout(function() {
    animated = false;
  }, 500);
}

scrollTop = function() {
  if (!animated) {
    animated=true;
    $('body').animate({scrollTop: 0}, 500, animadone);
  }
};


function checkScrolling(e) {

  if (e.target.id == 'el') return;

  console.log(e.originalEvent.wheelDelta);

  if (e.originalEvent.wheelDelta && e.originalEvent.wheelDelta >= 0) {
    //Up
    scrollUp();
  } else if (e.originalEvent.detail && e.originalEvent.detail <= 0) {
    //Up
    scrollUp();
  } else {
    // Down
    scrollDown();
  }
  e.preventDefault();
  e.stopPropagation();


}



$(document).on('scroll', function(){


});
