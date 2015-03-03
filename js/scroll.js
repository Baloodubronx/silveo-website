// When the DOM is ready
$(function() {

  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic.Controller();

  // Create Animation for 0.5s

  // Create the Scene and trigger when visible
  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger1',
    offset: 150
  })
  .setTween(".logocontainer", 1, {height: 120}) // trigger a TweenMax.to tween
  .setPin(".logocontainer")
  .addTo(scrollMagicController);


});
