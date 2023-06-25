$(document).ready(function () {
 
  // professional cards
  $(".procards").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 4000,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      550: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1100: {
        items: 4,
      },
    },
  });

  // iframe section aboutpage
  $("#Abiframeopen").click(() => {
    $(".Abiframemodal").css("display", "grid");
  });
  $(".Abiframeclose").click(() => {
    $(".Abiframemodal").css("display", "none");
  });
  $(".Abiframemodal").click(function (e) {
    if (e.target === $(".Abiframemodal")[0]) {
      $(".Abiframemodal").css("display", "none");
    }
  });
});
