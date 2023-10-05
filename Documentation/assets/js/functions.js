$(function() {

  "use strict";

  /*===============================================
    Smooth Scrolling
  ===============================================*/
  var htmlBody = $("html,body");
  var sLinks = $(".nav-link");

  sLinks.on("click", function(e) {
      htmlBody.animate({scrollTop: $(this.hash).offset().top - 60}, 500, "easeInOutQuart");  
    e.preventDefault();
  });

  /*===============================================
    Scroll Spy
  ===============================================*/
  $('body').scrollspy({ 
    target: '.nav',
    offset: 60
  });

});