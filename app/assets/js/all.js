$(document).ready(function(){
  $('.header .submenu a').click(function(e){
    e.preventDefault();
    $('.mobile-menu').slideToggle(300)
    $('.mobile-menu').toggleClass('active')
  });
});