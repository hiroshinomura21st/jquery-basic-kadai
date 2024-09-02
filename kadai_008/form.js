$(function() {
  // クラス属性がbtnの要素がクリックされたら
  $('.btn').on('click', function() {
    // テキストボックスにメッセージを表示する
    $('.text-box').val('クリックしました！');
  });
});