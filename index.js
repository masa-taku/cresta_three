$(function(){
  var imgHeight = $(".main_img").outerHeight(); //キービジュアルの画像の高さを取得
  var bgHeight = $('.fv').outerHeight(); //ファーストビューの高さを取得
  // 変数 //
  var dis = 700;

  $(".burger-btn").on('click', function () {
    if ($(window).scrollTop() < imgHeight - 50) {
      $(this).toggleClass("active");
      $(".header_nav").toggleClass("active").animate({ "margin-right": "+=" + dis + "px" }, 300);
      // disに-1を掛ける //
      dis *= -1;
      //背景を暗くするマスクをフェードイン・フェードアウトさせる　//
      $('.burger-musk').fadeToggle(300);
      //ハンバーガーメニューを開いたときにスクロールしないようにする //
      $('body').toggleClass('noscroll');

    } else {
      //ハンバーガーボタンを黒くしたり白くする //
      $(this).toggleClass('black');
      // ハンバーガーメニュー開閉 //
      $(this).toggleClass("active");
      $(".header_nav").toggleClass("active").animate({ "margin-right": "+=" + dis + "px" }, 300);
      // disに-1を掛ける //
      dis *= -1;
      //背景を暗くするマスクをフェードイン・フェードアウトさせる　//
      $('.burger-musk').fadeToggle(300);
      //ハンバーガーメニューを開いたときにスクロールしないようにする //
      $('body').toggleClass('noscroll');
    }
  });

  // スクロールすると、サイトロゴとハンバーガーボタンの色が変わる //
  $(window).on('load scroll', function () {
    if ($(window).scrollTop() < imgHeight - 50) {
      //メインビジュアル内にいるので、クラスを外す。
      $('.header_title').removeClass('black');
    } else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      $('.header_title').addClass('black');
    }

    if ($(window).scrollTop() < bgHeight - 50) {
      //メインビジュアル内にいるので、クラスを外す。
      $('.burger-btn').removeClass('black');
    } else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      $('.burger-btn').addClass('black');
    }
  });



  // $("#burger-btn").click(function(){

  //   $(this).toggleClass("active");

  //   $("#header_nav").toggleClass("active").animate({"margin-right" : "+=" + dis + "px"}, 300);

  //   // disに-1を掛ける //
  //   dis *= -1;
  // });
  // ハンバーガメニュー開閉 終了 //






});