$(document).ready(function(){
  $('.intro').slick({
    autoplay : true,
    autoplaySpeed : 5000,
    accessibility : false,
    dots: false,
    pauseOnHover : false,
    //appendArrows : '.oneslide',
    //centerMode: true,
    //centerPadding: '200px',
    //slideToShow : 3
    fade : true
  });

  $('.splash').height($(window).height());
  /*setTimeout(function() {
    $('#title1').addClass('animated fadeIn')
    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $('#title2').addClass('animated fadeIn')
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('#title3').addClass('animated fadeIn')
      });
    });
  }, 500);*/


  // SCROLLING ANIMTIONS
  $('.intro-container').css('opacity', 0);
  $('.approach').css('opacity', 0);
  $('.motto').css('opacity', 0);
  $('.competencies').css('opacity',0);
  $('.trustus').css('opacity',0);
  $('.team').css('opacity',0);

  //SIZES

  var introheight = $('.intro-container').outerHeight();
  var appHeight = $('.approach').outerHeight();
  var mottoHeight = $('.motto').outerHeight();
  var compHeight = $('.competencies').outerHeight();

  // TRUE OR FALSE?
  var intro = false, approach = false, motto = false, comp = false, team=false;

  $(window).scroll(function() {
    var scrolling = $(this).scrollTop();

    // Stick the menu
    if (scrolling > 100) {
      $('.menu-top').addClass('stuck');
    }

    if ((!intro) && (scrolling > 300)) {
      $('.intro-container').css('opacity', 1).addClass('animated slideInRight');
      intro = true;
    }

    if ((!approach) && (scrolling > introheight+300)) {
      $('.approach').css('opacity', 1).addClass('animated slideInLeft');
      approach = true;
    }

    if ((!motto) && (scrolling > introheight + appHeight + 500)) {
      $('.motto').css('opacity', 1).addClass('animated slideInRight');
      motto = true;
    }

    if ((!comp) && (scrolling > introheight+appHeight+mottoHeight + 400)) {
      $('.competencies').css('opacity',1).addClass('animated fadeInUp');
      $('.trustus').css('opacity',1);
      comp = true;
    }

    if ((!team) && (scrolling > introheight+appHeight+mottoHeight+compHeight+ 500)) {
      $('.team').css('opacity',1).addClass('animated bounceIn');
      comp = true;
    }
  });



  $('.scrollTo').click( function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top-50 }, speed ); // Go
			return false;
		});

});

// SOLVE THE SCROLLING ISSUE

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});
