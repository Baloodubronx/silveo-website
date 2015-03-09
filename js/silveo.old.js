// GLOBAL VARIABLES
var section = 1; // Active section
var windowHeight = 0; // The window height (lets hope they don't resize)
var windowWidth = 0;  // The window width


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

  // Background should have the window min-height
  $('.section-container').css({'height' : windowHeight});
  $('.one-bg').css({'height' : 1.2*windowHeight});

  $('#logo').delay(100).animate({'opacity':1}, 1000);
  $('#title-one').delay(1000).animate({'opacity':1}, 1500);
  $('#title-two').delay(3000).animate({'opacity':1}, 1000);
  $('#bg-one').delay(4000).animate({'opacity':1}, 1000);

  $('body').css({'overflow':'hidden'});

  setTimeout(function(){
    $('body').css({'overflow':'visible'});
    $('body').scrollTop(0);
  }, 5000);

});



$(document).on('scroll', function(){
  var position = $('body').scrollTop();
  console.log(position);

  // MAKE THE CURRENT BG PARALLALALALALALAXABLE
  parallax(position);


  if (position < windowHeight) {
    $('.mimik').css({'height': '0px'});
    $('#navbar').removeClass('fixed');

  }
  else {
    $('.mimik').css({'height': '80px'});
    $('#navbar').addClass('fixed');
  }

  if (position>windowHeight && position<2*windowHeight) {
    $('#info-one').animate({'opacity':1}, 1000);
    $('#info-two').animate({'opacity':1}, 1000);
    $('#info-three').animate({'opacity':1}, 1000);
  }


});


function parallax(scrolled) {
  var height = windowHeight;
  if (scrolled<windowHeight) {
    if (section!==1) {
      section=1;
      $('#bg-one').css({'background':'url(images/airport.png) no-repeat center'});
      $('#bg-one').css({'background-size':'100%'});
    }
    $('#bg-one').css('top', -(scrolled*0.2)+'px');
  }
  if (scrolled>windowHeight && scrolled<2*windowHeight) {
    if (section!==2) {
      section=2;
      $('#bg-two').css({'background':'url(images/2.png) no-repeat center'});
      $('#bg-two').css({'background-size':'120%'});
    }
    $('#bg-two').css('top', -((scrolled-windowHeight)*0.2)+'px');
  }
  if (scrolled>2*windowHeight && scrolled<3*windowHeight) {
    if (section!==3) {
      section=3;
    }
    $('#bg-two').css('top', -((scrolled-windowHeight)*0.2)+'px');
  }
  if (scrolled>3*windowHeight && scrolled<4*windowHeight) {
    $('#bg-one').css('top', -((scrolled-4*windowHeight)*0.2)+'px');
  }
}
