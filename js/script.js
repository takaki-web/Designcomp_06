// ページ内スクロール
$('a[href^="#"]').click(function () {
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});

$(function () {
  $("#js-p-index-fv__slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    slidesToShow: 1,
    speed: 4000,
  });
});

$(function(){
  function sliderSetting(){

      var width = $(window).width();

      if(width <= 500){
          $('#js-p-index-various__slider').not('.slick-initialized').slick({
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            speed: 4000,
            centerMode: true,
            centerPadding: "52px",
            dots: true,
                  });
      } else {
          $('#js-p-index-various__slider.slick-initialized').slick('unslick');
      }
  }

  sliderSetting();

  $(window).resize( function() {
      sliderSetting();
  });
});