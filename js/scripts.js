$(document).ready(function() {
    showSubMenu();
});

function showSubMenu() {
  $('.menu-item').click(function() {
    var isFistClick = $('.menu-item').parent().find('.active').size();
    if (isFistClick == 0) {
      $(this).addClass('first');
      $(this).addClass('active');
    } else {
      $('.menu-item').removeClass('first');
      $('.menu-item').removeClass('active');
      $(this).addClass('active');
    }
    $('#main-page').addClass('scale');
    $('#bg').addClass("show");
  });
}

function closeNavbar() {
  $('#main-page').removeClass('scale');
  $('#bg').removeClass("show");
  $('.menu-item').removeClass('first');
  $('.menu-item').removeClass('active');
}

$('#bg').click(function() {
  closeNavbar();
});
