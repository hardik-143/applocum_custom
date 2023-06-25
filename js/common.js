$(document).ready(function () {
  // main slider
  $(".mainOwlSlider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    margin: 30,
    items: 1,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
    },
  });
$('.careerSlider').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  margin: 30,
  items: 1,
  center: true,
});
  // scroll btn
  $(".scrollTopbtn").click(function () {
    $(document).scrollTop(0);
  });
  $(window).on("scroll", function () {
    let scrolled = $(window).scrollTop();
    if (scrolled > 1300) {
      $(".scrollTopbtn").css("display", "grid");
    } else {
      $(".scrollTopbtn").css("display", "none");
    }
  });
});
