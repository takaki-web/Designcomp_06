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



//【1199px以下】という条件を格納
const media_width = window.matchMedia("(max-width: 1199px)");

//処理の内容
function checkBreakPoint() {
    if (media_width.matches) { //1199px以下なら
      $(function () {
        $("#js-p-index-various__slider").slick({
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          speed: 4000,
          centerMode: true,
          centerPadding: "50px",
          dots: true,
        });
      });
    } else { //1200px以上なら
      $('#js-p-index-various__slider.slick-initialized').slick('unslick');
    }
  }

 // ブレイクポイントの瞬間に発火
 //media_width.addListener(checkBreakPoint); ← 非推奨。でもIE11とsafariでも機能する
 media_width.addEventListener("change", checkBreakPoint); //こっちが推奨だけど、safariとIE11で機能しない

 // 初回チェックで発火
 checkBreakPoint();