$(function () {
  stopBodyScroll.fixedBody();
});

$(window).on('load', function () {
  var speed = 300;
  if ($(window).width() < 768) speed = 500;
  setTimeout(function () {
    mg.closeLoading();
  }, speed);
});
