$(document).ready(function () {
  // console.log("HELLO WORLD");

  function navBG() {
    let winWidth = window.innerWidth;

    if (winWidth < 992) {
      // white nav with shadow
      $("nav").addClass("bg-white  shadow").removeClass("bg-transparent");
      // black navbar links
      $("nav .nav-item .nav-link").attr("style", "color:#000 !important;");
      // blue logo
      $(".navbar-brand img").attr("src", "./images/logo-blue.png");
    } else {
      // transparent nav without shadow
      $("nav").removeClass("bg-white  shadow").addClass("bg-transparent");
      // white navbar links
      $("nav .nav-item .nav-link").attr("style", "color:#fff !important;");
      // white logo
      $(".navbar-brand img").attr("src", "./images/logo.png");
    }
  }
  $(window).on("load", function () {
    navBG();
  });
  $(window).on("resize", function () {
    navBG();
  });
  $(window).on("scroll", function () {
    let winWidth = window.innerWidth;
    let scrolled = $(window).scrollTop();
    if (winWidth > 992) {
      if (scrolled > 20) {
        // transparent nav
        $("nav").addClass("bg-white  shadow").removeClass("bg-transparent");
        // blue logo
        $(".navbar-brand img").attr("src", "./images/logo-blue.png");
        // black navbar links
        $("nav .nav-item .nav-link").attr("style", "color:#000 !important;");
      } else {
        $("nav").removeClass("bg-white  shadow").addClass("bg-transparent");
        // white logo
        $(".navbar-brand img").attr("src", "./images/logo.png");
        // white navbar links
        $("nav .nav-item .nav-link").attr("style", "color:#fff !important;");
      }
    }
  });
  // iframe section homepage
  $("#iframeopen").click(() => {
    $(".iframemodal").css("display", "grid");
  });
  $(".iframeclose").click(() => {
    $(".iframemodal").css("display", "none");
  });
  $(".iframemodal").click(function (e) {
    if (e.target === $(".iframemodal")[0]) {
      $(".iframemodal").css("display", "none");
    }
  });

  // slider
  $(".trustedSlider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 32500,
    dotsEach: true,
    margin: 40,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },
      800: {
        items: 4,
      },
      1024: {
        items: 6,
      },
    },
  });
});
