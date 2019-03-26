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
