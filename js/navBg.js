$(document).ready(function () {
  // nav-link-tWhite
  function navBG() {
    let winWidth = window.innerWidth;

    if (winWidth < 992) {
      $("nav").addClass("shadow");
    } else {
      $("nav").removeClass("shadow");
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
      if (scrolled > 50) {
        $("nav").addClass("shadow");
      } else {
        $("nav").removeClass("shadow");
      }
    }
  });
});
