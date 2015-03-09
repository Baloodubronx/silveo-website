var section = 0; // Active section
var windowHeight = 0; // The window height (lets hope they don't resize)
var windowWidth = 0;  // The window width
var curpos=0;
var animate=false;
var section_start = [];
// DEFINE THE SECTIONS


// SCROLL BACK TO TOP BEFORE UNLOADING PAGE -> ENSURE ON TOP AT EVERY LOADING
$(window).on('beforeunload', function(){
  $(this).scrollTop(0);
});

// WHEN DOM IS READY
$(document).ready(function() {
  windowHeight = $(window).height();
  var wh = windowHeight;
  windowWidth = $(window).width();

  section_start = [0, wh*3/5, wh*4/5, wh, wh+300, wh+650, wh+950];


  //console.log(windowHeight);
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

  //$('body').css({'overflow-y':'hidden'});

  setTimeout(function(){
    $('body').css({'overflow-y':'visible'});
    $('body').scrollTop(0);
  }, 4000);

});



$(document).on('scroll', function(){
  var position = $('body').scrollTop();
  //console.log(position);
  // MAKE THE CURRENT BG PARALLALALALALALAXABLE
  parallax(position);

  for (var i=0; i<section_start.length; i++) {
    var top = section_start[i];
    var bottom = section_start[i+1] || 10000;
    //console.log(top + ' - ' + position + ' - ' + bottom);
    if ( (top < position) && (position < bottom)) {
      if (section !== i) {
        section = i;
        for (var j=0; j<=i; j++) {
          sectionsEnter[j]();
        }
        for (var k=i+1; k<section_start.length; k++) {
          sectionsLeave[k]();
        }
      }
    }
  }

});

function parallax(scrolled) {
  var coeff=-0.2;
  $('.one-long-bar').css('background-position', '50% '+ scrolled*coeff+'px');
}

var sectionsEnter = [
  // SECTION 0
  function () {
    console.log('entering section 0');
  },

  // SECTION 1
  function () {
    console.log('entering section 1');
    TweenLite.to("#h11", 1, {opacity:1});
  },
  // SECTION 2
  function() {
    console.log('entering section 2');
    TweenLite.to("#roundy1", 1, {opacity:1});
  },
  // SECTION 3
  function() {
    console.log('entering section 3');
    $('.mimik').css({'height': '70px'});
    $('#nav').addClass('fixed');
    TweenLite.to("#cont1", 1, {marginLeft:'50%'});
  },
  // SECTION 4
  function() {
    console.log('entering section 4');
    TweenLite.to("#cont2", 1, {marginRight:'50%'});
  },
  // SECTION 5
  function() {
    console.log('entering section 5');
    TweenLite.to("#cont3", 0.4, {opacity:1});
  },
  // SECTION 6
  function() {
    TweenLite.to("#cont4", 1, {height:400, opacity:1});
    console.log('entering section 6');
  }
];

var sectionsLeave = [
  // SECTION 0
  function() {

    console.log('leaving section 0');
  },
  // SECTION 1
  function() {
    TweenLite.to("#h11", 1, {opacity:0});
    console.log('leaving section 1');
  },
  // SECTION 2
  function() {
    TweenLite.to("#roundy1", 1, {opacity:0});
    console.log('leaving section 2');
  },
  // SECTION 3
  function() {
    TweenLite.to("#cont1", 1, {marginLeft:2*windowWidth+'px'});
    console.log('leaving section 3');
  },
  // SECTION 4
  function() {
    TweenLite.to("#cont2", 1, {marginRight:2*windowWidth+'px'});
    console.log('leaving section 4');
  },
  // SECTION 5
  function() {
    TweenLite.to("#cont3", 0.8, {opacity:0});
    console.log('leaving section 5');
  },
  // SECTION 6
  function() {
    TweenLite.to("#cont4", 1, {height:0, opacity:0});
    console.log('leaving section 6');
  }
];
