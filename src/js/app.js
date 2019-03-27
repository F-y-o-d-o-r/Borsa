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
$(document).on('click', '#leftOrder', function() {
  $('.request-menu-wrapper').removeClass('hidden');
  setTimeout(function() {
    $('.request-menu-wrapper').removeClass('visuallyhidden');
    $('.request-menu-wrapper .content-wrapper').removeClass('content-wrapper-hidden');
  }, 200);
  $('body').addClass('overflow-hidden');
});
$(document).on('click', '.request-menu-wrapper .close', function() {
  $('.request-menu-wrapper .content-wrapper').addClass('content-wrapper-hidden');
  $('.request-menu-wrapper').addClass('visuallyhidden');
  setTimeout(function() {
    $('.request-menu-wrapper').addClass('hidden');
  }, 200);
  $('body').removeClass('overflow-hidden');
});
/* ============================================================================
 * END Request menu
 * ============================================================================ */
