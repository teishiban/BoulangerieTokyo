$(function () {
  // アンカーリンク
  $("a[href^=#]").click(function () {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? "html" : href);
    // 移動先を数値で取得
    var header = $("header").height();
    //ヘッダーの高さを引く
    var position = target.offset().top - header;
    // スムーススクロール
    $("body,html").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });

  $(".slick01").slick({
    arrows: false,
    dots: false,
    autoplay: true,
    vertical: true,
    autoplay: true, //自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 1700,
    pauseOnHover: false, //オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false, //フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    slidesToShow: 1, //スライドを画面に1枚見せる
    slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
  });

  $(".slick02").slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplay: true, //自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 1700,
    pauseOnHover: false, //オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false, //フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    slidesToShow: 1, //スライドを画面に1枚見せる
    slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
  });
});
