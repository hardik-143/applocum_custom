$(document).ready(function(){
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
})