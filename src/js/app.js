// import sayHello from './lib/sayHello.js';
import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import './lib/slickSlider';

// sayHello();
/* ============================================================================
 * START Burger menu
 * ============================================================================ */
$(document).ready(function() {
  svg4everybody();
  $('#nav-icon').click(function() {
    $(this).toggleClass('open');
    $('.burger-menu-wrapper').toggleClass('open');
    $('body').toggleClass('overflow-hidden');
  });
});
/* ============================================================================
 * END Burger menu
 * ============================================================================ */
/* ============================================================================
 * START Sort mobile menu on news page
 * ============================================================================ */
$(document).on('click', 'button.btn-more.sort-mobile-btn', function(e) {
  e.preventDefault();
  $('.date-chose-wrapper-mobile-popup').removeClass('dnone');
  $('body').addClass('overflow-hidden');
});
$(document).on('click', '.date-chose-wrapper-mobile img', function(e) {
  e.preventDefault();
  $('.date-chose-wrapper-mobile-popup').addClass('dnone');
  $('body').removeClass('overflow-hidden');
});
/* ============================================================================
 * END Sort mobile menu on news page
 * ============================================================================ */
/* ============================================================================
 * START Popup
 * ============================================================================ */
$(document).on('click', '.popup-wrapper .close', function() {
  $('.popup-wrapper').addClass('dnone');
  $('body').removeClass('overflow-hidden');
});
/* ============================================================================
 * END Popup
 * ============================================================================ */
/* ============================================================================
 * START Request menu
 * ============================================================================ */
$(document).on('click', '#leftOrder, #leftOrderMobile', function() {
  $('.request-menu-wrapper').removeClass('hidden');
  setTimeout(function() {
    $('.request-menu-wrapper').removeClass('visuallyhidden');
    $('.request-menu-wrapper .content-wrapper').removeClass('content-wrapper-hidden');
  }, 200);
  // $('body').addClass('overflow-hidden');
});
$(document).on('click', '.request-menu-wrapper .close', function() {
  $('.request-menu-wrapper .content-wrapper').addClass('content-wrapper-hidden');
  $('.request-menu-wrapper').addClass('visuallyhidden');
  setTimeout(function() {
    $('.request-menu-wrapper').addClass('hidden');
  }, 200);
  // $('body').removeClass('overflow-hidden');
});
/* ============================================================================
 * END Request menu
 * ============================================================================ */
/* ============================================================================
 * START Header Submenu
 * ============================================================================ */
$('header.header nav ul li').hover(
  function() {
    // mouse enter
    // $(this).find(' > .wrap-sub-menu').css('display', 'flex'); // display immediate child
    $(this).find(' >.wrap-sub-menu .sub-menu').css('display', 'flex'); // display immediate child
  },
  function() {
    // mouse leave
    // if (!$(this).hasClass('current_page_item')) {
    // check if current page
    $(this).find('.sub-menu').css('display', 'none'); // hide if not current page
    // }
  }
);
$('header.header nav ul li .sub-menu').wrap('<div class="wrap-sub-menu">');
/* ============================================================================
 * END Header Submenu
 * ============================================================================ */
/* ============================================================================
 * START .burger-menu-wrapper submenu
 * ============================================================================ */
$(document).on('click', '.burger-menu-wrapper li.product > a', function(e) {
  e.preventDefault();
  $('.burger-menu-wrapper .product').toggleClass('opened');
});
/* ============================================================================
 * END .burger-menu-wrapper submenu
 * ============================================================================ */
/* ============================================================================
 * START Mask
 * ============================================================================ */
var phoneInput = document.querySelectorAll('.phone-mask');

for (var i = 0; i < phoneInput.length; i++) {
  phoneInput[i].addEventListener('keydown', function(event) {
    if (
      !(event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'Backspace' || event.key === 'Tab')
    ) {
      event.preventDefault();
    }
    var mask = '+7 (111) 111-11-11'; // Задаем маску
    if (/[0-9\+\ \-\(\)]/.test(event.key)) {
      // Здесь начинаем сравнивать this.value и mask
      // к примеру опять же
      var currentString = this.value;
      var currentLength = currentString.length;
      if (/[0-9]/.test(event.key)) {
        if (mask[currentLength] === '1') {
          this.value = currentString + event.key;
        } else {
          for (var i = currentLength; i < mask.length; i++) {
            if (mask[i] === '1') {
              this.value = currentString + event.key;
              break;
            }
            currentString += mask[i];
          }
        }
      }
    }
  });
}
/* ============================================================================
 * END Mask
 * ============================================================================ */
