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
