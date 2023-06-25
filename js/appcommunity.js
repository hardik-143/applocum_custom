$(document).ready(function(){
     // appcommunityiframe section homepage
  $("#iframeopen").click(() => {
    $(".iframemodal").css("display", "grid");
  });
  $(".appcomframeclose").click(() => {
    $(".iframemodal").css("display", "none");
  });
  $(".iframemodal").click(function (e) {
    if (e.target === $(".iframemodal")[0]) {
      $(".iframemodal").css("display", "none");
    }
  });
})