$(document).ready(function () {
  //
  // wrapperBody
  $(".wrapperHead").click(function () {
    let Head = $(this)[0];
    let Body = $(this).next()[0];
    $(Head).toggleClass("ShowwrapperBody");
    let icon = $(Head).children()[1];
    if ($(this).hasClass("ShowwrapperBody") == true) {
      $(icon).removeClass("fa-plus").addClass("fa-minus");
      $(Body).css("display", "block");
    } else {
        $(icon).addClass("fa-plus").removeClass("fa-minus");
        $(Body).css("display", "none");
    }
  });
  $(".Que").click(function () {
    let Que = $(this)[0];
    let Answer = $(this).next()[0];
    $(Que).toggleClass("ShowAnswer");
    let icon = $(Que).children()[1];
    if ($(this).hasClass("ShowAnswer") == true) {
      $(icon).removeClass("fa-plus").addClass("fa-minus");
      $(Answer).css({"height": Answer.scrollHeight + "px"})        
    } else {
      $(icon).addClass("fa-plus").removeClass("fa-minus");
      $(Answer).css("height", "0px");
    }
  });
});
