$(document).ready(function () {
  $("#registerFile").change(function () {
    filename = this.files[0].name;

    label = $(this).prev();
    span = $(label).children()[0];
    $(span).text(filename);
  });

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
      if (scrolled > 10) {
        $("nav").addClass("shadow");
      } else {
        $("nav").removeClass("shadow");
      }
    }
  });
});
