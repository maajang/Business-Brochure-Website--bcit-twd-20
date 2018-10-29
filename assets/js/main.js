$(document).ready(() => {
  $('#menuCheck').click(() => {
    $('.mobile-nav').slideToggle('slow');
  });
  window.matchMedia('(min-width: 750px)').addListener((e) => {
    if (e.matches) {
      $('.mobile-nav').css('display', 'flex');
    } else {
      $('.mobile-nav').css('display', 'none');
    }
  });
});
