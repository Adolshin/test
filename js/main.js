$('#description').click(function () {
  $('.description').removeClass('hidden');
  $('.requirments').addClass('hidden');
});

$('#requirments').click(function () {
  $('.requirments').removeClass('hidden');
  $('.description').addClass('hidden');
});

$('.menu__title').click(function () {
  $('.menu__title').removeClass('menu__title_active');
  $(this).addClass('menu__title_active');
});

$('.overlay-lang__link').click(function (e) {
  e.preventDefault();
  $('.overlay-lang').removeClass('overlay-lang_active');
  $('body').removeClass('body_modal');
});

$('.cross_lang').click(function (e) {
  e.preventDefault();
  $('.overlay-lang').removeClass('overlay-lang_active');
  $('body').removeClass('body_modal');
});

$('.login__button').click(function (e) {
  e.preventDefault();  
  $('.overlay-lang').addClass('overlay-lang_active');
  $('body').addClass('body_modal');
});

$('.ок-button').click(function (e) {
  e.preventDefault();  
  $('.overlay-popup').addClass('overlay-popup_active');
  $('.popup').addClass('popup_active'); 
  $('body').addClass('body_modal');
});

$('.overlay-popup').click(function () {    
  $('.overlay-popup').removeClass('overlay-popup_active');
  $('body').removeClass('body_modal');
  $('.popup').removeClass('popup_active'); 
});