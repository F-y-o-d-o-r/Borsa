import $ from 'jquery';
import 'slick-carousel';

/* ============================================================================
 * START main-page
 * ============================================================================ */
$('.slick').slick({
  prevArrow: false,
  nextArrow: false,
  dots: true,
  appendDots: '.container.dots',
  pauseOnFocus: false,
  pauseOnHover: false,
  customPaging: function() {
    // slider ,i
    // var thumb = $(slider.$slides[i]).data();
    // return '<a class="dot">' + i + '</a>';
    // return $('<button type="button" />').text(i + 1);
    return '<div class="animsvgwrapper"><svg class="progress" width="21" height="21" viewBox="0 0 120 120"><circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" stroke-width="12" />      <circle class="progress__value" cx="60" cy="60" r="54" fill="none" stroke="#00BA3C" stroke-width="12" /><circle class="progress__inside" cx="60" cy="60" r="30" fill="#e6e6e6" stroke="" stroke-width="12" />    </svg>  </div>';
  },
  autoplay: true,
  autoplaySpeed: 5000
});
// $('.slick').show();
/* ============================================================================
 * END main-page
 * ============================================================================ */
/* ============================================================================
 * START product-page
 * ============================================================================ */
$('.slick-product-slider').slick({
  arrows: true,
  appendArrows: '.slick-btns-wrapper'
});
// On before slide change
$('.slick-product-slider').on('afterChange', function(event, slick, currentSlide) {
  $('#types li').removeClass('active');
  $('#types li').eq(currentSlide).addClass('active');
});
$('#types').on('click', 'li', function() {
  $('.slick-product-slider').slick('slickGoTo', $(this).index(), false);
});
/* ============================================================================
 * END product-page
 * ============================================================================ */
/* ============================================================================
 * START Popup sliders
 * ============================================================================ */
let initPopupSliderDone = false;
$(document).on('click', '#runSlider', function(e) {
  e.preventDefault();
  // find popup
  let sliderPopupId = $(this).data('slide');
  // init slider
  if (!initPopupSliderDone) {
    $('.slick-popup-slider').slick({
      arrows: true,
      appendArrows: '.hidden-slick-btns-wrapper'
    });
    initPopupSliderDone = true;
    $('body').addClass('overflow-hidden');
  } else {
    $('body').addClass('overflow-hidden');
  }
  // enter nums text
  $('.slick-popup-slider').on('afterChange', function(event, slick, currentSlide) {
    $('#thisSlideNum').text(currentSlide + 1);
  });
  $('#sliders').text($('.slick-popup-slider .slick-slide').not('.slick-cloned').length);
  $('body').find('#' + sliderPopupId).removeClass('dnone');
});
// close popup
$('body').on('click', '#closePopup', function() {
  $(this).parent().parent().addClass('dnone');
  $('body').removeClass('overflow-hidden');
});
/* ============================================================================
 * END Popup sliders
 * ============================================================================ */
