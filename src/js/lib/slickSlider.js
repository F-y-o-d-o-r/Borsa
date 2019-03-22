import $ from 'jquery';
import 'slick-carousel';

$('.slick').slick({
  prevArrow: false,
  nextArrow: false,
  dots: true,
  appendDots: '.container.dots',
  pauseOnFocus: false,
  pauseOnHover: false,
  customPaging: function(slider, i) {
    // var thumb = $(slider.$slides[i]).data();
    // return '<a class="dot">' + i + '</a>';
    // return $('<button type="button" />').text(i + 1);
    return '<div class="animsvgwrapper"><svg class="progress" width="21" height="21" viewBox="0 0 120 120"><circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" stroke-width="12" />      <circle class="progress__value" cx="60" cy="60" r="54" fill="none" stroke="#00BA3C" stroke-width="12" /><circle class="progress__inside" cx="60" cy="60" r="30" fill="#e6e6e6" stroke="" stroke-width="12" />    </svg>  </div>';
  },
  autoplay: true,
  autoplaySpeed: 5000
});
// $('.slick').show();
