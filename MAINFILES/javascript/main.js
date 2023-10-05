/*
* ----------------------------------------------------------------------------------------
Author        : rama hardian sidik
Template Name : Engage - Consulting & Business Landing Page Bootstrap Template
Version       : 1.0
Filename      : main.js
* ----------------------------------------------------------------------------------------
* ----------------------------------------------------------------------------------------
*/
const Engageinit = (function () {
  "use strict";
  // variable
  var Window = $(window);
  var Header = $("#main-header");
  var partner = $("#partner");
  var goup = $(".scroll-top");
  var testimonialslide = $("#testimonial-slide");
  var popupImage = $(".popup-image");
  var imagezoom = $(".img-popup-btn");
  var mobileMenu = $(".mobile-navwrap");
  var videoPopup = $(".video-popup");
  var navbar = $("#navbarCollapse");
  // fixed header init ----------------------
  const fixi = function (e) {
    if (Window.scrollTop() > 0) {
      goup.addClass("showin");
      Header.addClass("fixihead");
    } else {
      goup.removeClass("showin");
      Header.removeClass("fixihead");
    }
  };
  // counter ------------------------------
  const odometer = function (e) {
    if ($(".odometer").length) {
      $(".odometer").appear();
      $(".odometer").appear(function () {
        var odo = $(".odometer");
        odo.each(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
        });
        window.odometerOptions = {
          format: "d",
        };
      });
    }
  };
  // isotope -----------------
  const isotopes = function (e) {
    //Isotope portfolio grid
    if ($("#porfolio-warp").length) {
      $("#porfolio-warp").imagesLoaded(function () {
        $(".porfolio-warp").isotope({
          resizable: false,
          itemSelector: ".project-item",
          layoutMode: "masonry",
          filter: "*",
        });
      });
    }
    // filter items on button click
    $(".wraplistfilter ul li a").on("click", function () {
      $(".wraplistfilter ul li a").removeClass("aktip");
      $(this).addClass("aktip");
      var filterValue = $(this).attr("data-filter");
      $("#porfolio-warp").isotope({ filter: filterValue });

      return false;
    });
  };
  // link init --------------------
  const linkbutton = function (e) {
    $("a.nav-link").on("click", function (e) {
      const link = $(this).attr("href");
      var currentMainNavHeight = navbar.innerHeight();
      if (link.charAt(0) === "#") {
        e.preventDefault();
        const target = this.hash;
        $("body, html").animate(
          {
            scrollTop: $(target).offset().top - currentMainNavHeight + 5,
          },
          500
        );
      }
    });
  };
  // faq init ----------------------
  const acordion = function (e) {
    $(".faq-collapse-item-card-header").click(function () {
      if (
        $(this)
          .next(".faq-collapse-item-card-header-content")
          .hasClass("active")
      ) {
        $(this)
          .next(".faq-collapse-item-card-header-content")
          .removeClass("active")
          .slideUp();
        $(this).children("i").removeClass("fa fa-minus").addClass("fa fa-plus");
      } else {
        $(".faq-collapse-item-card-header-content")
          .removeClass("active")
          .slideUp();
        $(".faq-collapse-item-card-header i")
          .removeClass("fa fa-minus")
          .addClass("fa fa-plus");
        $(this)
          .next(".faq-collapse-item-card-header-content")
          .addClass("active")
          .slideDown();
        $(this).children("i").removeClass("fa fa-plus").addClass("fa fa-minus");
      }
    });
  };
  // slide init -------------------
  const slider = function (e) {
    if (testimonialslide.length) {
      testimonialslide.owlCarousel({
        loop: true,
        touchDrag: true,
        margin: 10,
        center: true,
        slideSpeed: 1000,
        autoplay: true,
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        mouseDrag: true,
        responsive: {
          0: {
            items: 1,
          },
          680: {
            items: 1,
          },
          960: {
            items: 2,
          },
          1024: {
            items: 3,
          },
          1280: {
            items: 3,
          },
        },
      });
      testimonialslide.owlCarousel();
      $(".next-btn").click(function () {
        testimonialslide.trigger("next.owl.carousel");
      });
      $(".prev-btn").click(function () {
        testimonialslide.trigger("prev.owl.carousel");
      });
    }
    if (partner.length) {
      partner.owlCarousel({
        loop: true,
        items: 4,
        lazyLoad: false,
        margin: 50,
        autoplay: true,
        autoplayTimeout: 7000,
        rtl: false,
        dots: true,
        nav: false,
        navSpeed: true,
        responsive: {
          0: {
            items: 1,
          },
          480: {
            items: 2,
          },
          768: {
            items: 3,
          },
          1040: {
            items: 3,
          },
          1200: {
            items: 3,
          },
          1600: {
            items: 4,
          },
          1920: {
            items: 4,
          },
        },
      });
    }
  };
  // scroll spy --------------------------------
  if ($(".nav-link").length) {
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: "*",
      offset: navbar.innerHeight() + 1,
    });
  }
  // magnifig popup -------------------
  const magnific = function (e) {
    imagezoom.magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
    if (popupImage.length > 0) {
      popupImage.magnificPopup({
        type: "image",
        fixedContentPos: true,
        gallery: {
          enabled: true,
        },
        removalDelay: 300,
        mainClass: "mfp-fade",
      });
    }
    //Video Popup init
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 480,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: true,
    });
    //Video Popup
    if (videoPopup.length > 0) {
      videoPopup.magnificPopup({
        type: "iframe",
        removalDelay: 300,
        mainClass: "mfp-fade",
        overflowY: "hidden",
        iframe: {
          markup:
            '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            "</div>",
          patterns: {
            youtube: {
              index: "youtube.com/",
              id: "v=",
              src: "//www.youtube.com/embed/%id%?autoplay=1",
            },
            vimeo: {
              index: "vimeo.com/",
              id: "/",
              src: "//player.vimeo.com/video/%id%?autoplay=1",
            },
            gmaps: {
              index: "//maps.google.",
              src: "%id%&output=embed",
            },
          },
          srcAction: "iframe_src",
        },
      });
    }
  };
  //binds event ----------------------------
  const bindEvents = function (e) {
    // window onbuffer
    window.onbeforeunload = function (e) {
      // allways force page to scroll top on refresh
      window.scrollTo(0, 0);
    };
    // window load
    window.addEventListener("load", (e) => {});
    // document load
    window.addEventListener("DOMContentLoaded", (e) => {
      // link
      linkbutton();
      // counter
      odometer();
      // slider
      slider();
      // isotope
      isotopes();
      // magnigfic
      magnific();
      // accordion
      acordion();
    });
    window.addEventListener("scroll", (e) => {
      // fixed
      fixi();
    });
  };
  // init - initilizes elements and events
  const AppInit = function (e) {
    bindEvents();
  };
  return {
    AppInit: AppInit,
  };
})();
//initilizing app
Engageinit.AppInit();
