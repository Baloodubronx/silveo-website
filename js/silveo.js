var section = 0; // Active section
var windowHeight = 0; // The window height (lets hope they don't resize)
var windowWidth = 0;  // The window width
var curpos=0;
var animate=false;

// SCROLL BACK TO TOP BEFORE UNLOADING PAGE -> ENSURE ON TOP AT EVERY LOADING
$(window).on('beforeunload', function(){
  $(this).scrollTop(0);
});

// WHEN DOM IS READY
$(document).ready(function() {
  windowHeight = $(window).height();
  windowWidth = $(window).width();
  console.log(windowHeight);
  // Scroll back to top (just making sure)
  $(this).scrollTop(0);


  TweenLite.from("#logo", 1, {opacity:0, delay:0.1});
  TweenLite.from("#title1", 1.5, {opacity:0, delay:1});
  TweenLite.from("#title2", 1, {opacity:0, delay:2});
  TweenLite.from("#bg1", 2, {opacity:0, delay:3});
  TweenLite.from(".scrolldown", 2, {opacity:0, delay:3});

  TweenLite.to("#cont1", 0.1, {marginLeft:2*windowWidth+'px'});
  TweenLite.to("#cont2", 0.1, {marginRight:2*windowWidth+'px'});
  TweenLite.from(".one-long-bar", 1, {opacity:0, delay:4.5});

  $('body').css({'overflow-y':'hidden'});

  setTimeout(function(){
    $('body').css({'overflow-y':'visible'});
    $('body').scrollTop(0);
  }, 4000);

});



$(document).on('scroll', function(){
  var position = $('body').scrollTop();
  console.log(position);
  // MAKE THE CURRENT BG PARALLALALALALALAXABLE
  parallax(position);

  // NO SECTION
  if (position < windowHeight*3/5) {
    TweenLite.to("#h11", 1, {opacity:0});
    TweenLite.to("#roundy1", 1, {opacity:0});
    TweenLite.to("#cont1", 1, {marginLeft:2*windowWidth+'px'});
    TweenLite.to("#cont2", 1, {marginRight:2*windowWidth+'px'});
    TweenLite.to("#cont3", 0.01, {padding: 0});
    TweenLite.to("#cont3", 0.8, {height:0});
  }

  // SECTION 1
  if ((position > windowHeight*3/5) && (position < 4/5*windowHeight)) {
    if (section!==1) {
      TweenLite.to("#h11", 1, {opacity:1});
      section =1;

      // remove
      TweenLite.to("#roundy1", 1, {opacity:0});
      TweenLite.to("#cont1", 1, {marginLeft:2*windowWidth+'px'});
      TweenLite.to("#cont2", 1, {marginRight:2*windowWidth+'px'});
      TweenLite.to("#cont3", 0.01, {padding: 0});
      TweenLite.to("#cont3", 0.8, {height:0});
    }
  }

  // SECTION 2
  if ((position > windowHeight*4/5) && (position < windowHeight)) {
    if (section !== 2){
      TweenLite.to("#roundy1", 1, {opacity:1});
      TweenLite.to("#h11", 1, {opacity:1});
      section = 2;

      TweenLite.to("#cont1", 1, {marginLeft:2*windowWidth+'px'});
      TweenLite.to("#cont2", 1, {marginRight:2*windowWidth+'px'});
      TweenLite.to("#cont3", 0.01, {padding: 0});
      TweenLite.to("#cont3", 0.8, {height:0});
    }
  }

  // SECTION 3
  if ((position > windowHeight) && (position < windowHeight+200)) {
    if (section !== 3){
      $('.mimik').css({'height': '70px'});
      $('#nav').addClass('fixed');
      TweenLite.to("#cont1", 1, {marginLeft:'50%'});
      section = 3;

      TweenLite.to("#cont2", 1, {marginRight:2*windowWidth+'px'});
      TweenLite.to("#cont3", 0.01, {padding: 0});
      TweenLite.to("#cont3", 0.8, {height:0});
    }
  }

  // SECTION 4
  if ((position>windowHeight+200) && (position < windowHeight*3/2)) {
    if (section !== 4) {
      section = 4;
      TweenLite.to("#cont2", 1, {marginRight:'50%'});

      TweenLite.to("#cont3", 0.01, {padding: 0});
      TweenLite.to("#cont3", 0.8, {height:0});
    }
  }

  // SECTION 5
  if ((position>windowHeight*1.9) ) {
    if (section !== 5) {
      section = 5;
      TweenLite.to("#cont3", 0.01, {padding: '40px 20px'});
      TweenLite.to("#cont3", 0.8, {height:'200px'});
    }
  }

});

function parallax(scrolled) {
  var coeff=-0.2;
  $('.one-long-bar').css('background-position', '50% '+ scrolled*coeff+'px');
}
