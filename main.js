// main .js

// 2depth Menu
$(function(){

  $('header nav > ul > li').hover(
    function(){
      $(this)
        .find('.depth2')
        .stop()
        .fadeIn(100);
    },
    function(){
      $(this)
        .find('.depth2')
        .stop()
        .fadeOut(100);
    }
  );

});

// Slider
$(function(){
  var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', // 방향
      loop: true, //무한 반복
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      autoplay : {
          delay : 3000
      }
  });
});
