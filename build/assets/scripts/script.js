// $(document).ready(function() {
//     $('#fullpage').fullpage({
//         anchors: ['firstPage', 'secondPage', '3rdPage'],
//         sectionsColor: ['#F0F2F4', '#F0F2F4', '#F0F2F4'],
//         css3:false,
//         navigation: true,
//         navigationPosition: 'right',
//         navigationTooltips: ['First page', 'Second page', 'Third and last page']
//     });
// });

var resHeight = 600;
var resWidth = 900;
var shouldAnimate = void 0;
if ($(window).width() < resWidth || $(window).height() < resHeight) {
  shouldAnimate = false;
} else {
  shouldAnimate = true;
}
$(document).ready(function () {
  $('#fullpage').fullpage({
    sectionsColor: ['#F0F2F4', '#F0F2F4', '#F0F2F4', '#F0F2F4', '#F0F2F4', '#F0F2F4'],
    css3: false,
    navigation: true,
    responsiveHeight: resHeight,
    responsiveWidth: resWidth,
    afterResponsive: function afterResponsive(isResponsive) {
      if (isResponsive) {
        shouldAnimate = false;
      } else {
        shouldAnimate = true;
      }
    },
    onLeave: function onLeave(index, nextIndex, direction) {
      if (shouldAnimate) {
        var $prevText = "";
        if (index != 1) {
          if (index == 2) {
            $prevText = $('.section2 .animated-text');
          } else if (index == 3) {
            $prevText = $('.section3 .animated-text');
          } else if (index == 4) {
            $prevText = $('.section4 .animated-text');
          } else if (index == 5) {
            $prevText = $('.section5 .animated-text');
          } else if (index == 6) {
            $prevText = $('.section6 .animated-text');
          }
          $prevText.removeClass('animated fadeInLeftBig fadeInRightBig');
        }
        if (nextIndex != 1) {
          var $textToAnimate = "";
          if (nextIndex == 2) {

            $textToAnimate = $('.section2 .animated-text');
          } else if (nextIndex == 3) {
            $prevText = $('.section2 .animated-text');
            $prevText.removeClass('animated fadeInLeftBig');
            $textToAnimate = $('.section3 .animated-text');
          } else if (nextIndex == 4) {
            $textToAnimate = $('.section4 .animated-text');
          } else if (nextIndex == 5) {
            $textToAnimate = $('.section5 .animated-text');
          } else if (nextIndex == 6) {
            $textToAnimate = $('.section6 .animated-text');
          }
          if (nextIndex == 3 || nextIndex == 5) {
            $textToAnimate.addClass('animated fadeInRightBig');
          } else {
            $textToAnimate.addClass('animated fadeInLeftBig');
          }
          var delay = .2;
          for (var i = 0; i < $textToAnimate.length; i++) {
            $textToAnimate.eq(i).css('animation-delay', delay + "s");
            delay += .2;
          }
        }
      }
    }
  });
  //END OF FULLPAGE CONFIG
});
