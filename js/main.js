$(function () {
  $('#page-top').click(function (event) {
    event.preventDefault();
    $('html, body').scrollTop(0)
  });
});