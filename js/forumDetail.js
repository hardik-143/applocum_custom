$(document).ready(function () {
  $(".postInteraction .fa-heart").click(function () {
    $(this).toggleClass("liked");

    let likeCount = $(this).next().children()[0];
    // get total like
    let num = parseInt($(likeCount).text());
    if ($(this).hasClass("liked")) {
      $(this).addClass("fas").removeClass("far");
      // +1 in likes
      $(likeCount).text(num + 1);
    } else {
      $(this).removeClass("fas").addClass("far");
      // -1 in likes
      $(likeCount).text(num - 1);
    }
  });
});
