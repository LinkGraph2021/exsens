jQuery(document).ready(function () {
  var $headings = jQuery(".article .sideSections--content_headings");
  var offset = jQuery('.sideSections--cta')[1].offsetTop + 200; // Adjust as needed

  if ($headings.length) {
    jQuery(window).on("scroll", function () {
      if (jQuery(window).scrollTop() > offset  && window.innerWidth > 768) {
        $headings.addClass("stickied");
      } else {
        $headings.removeClass("stickied");
      }
    });
  }
});
