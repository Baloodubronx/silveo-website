$(document).on('scroll', function(){
  var logo = $('.logo');
  var position = $('body').scrollTop();
  var degrees = $('body').scrollTop()/3; // Get position of the body

  logo.css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});

  console.log(position);

  if (position < 0) {
    $('body').scrollTop(0);
  }

  if (position < 850) {
    $('.logocontainer').removeClass('fixed');
  }

  if (position> 850) {
    $('.logocontainer').addClass('fixed');
  }
});
