/**
 * jquery-parallaxer
 */
$(function() {
  $window = $(window);
  $('[data-parallaxer]').each(function() {
    var that = $(this);
    $window.scroll(function() {
      var t = -($window.scrollTop() / that.data("speed"));
      that.css("background-position-y", t + 'px');
    })
  });
});
