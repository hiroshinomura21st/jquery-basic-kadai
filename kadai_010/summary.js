$(function() {
  // id要素がchange-colorの要素がクリックされたとき
  $('#change-color').on('click', function() {
    // 色が変わる
    $('#target').css('color', 'red');
  });

  // id要素がchange-textの要素がクリックされたとき
  $('#change-text').on('click', function() {
    // テキストが変わる
    $('#target').text('Hello!');
  });

  // id要素がfade-outの要素がクリックされたとき
  $('#fade-out').on('click', function() {
    // フェードアウトする
    $('#target').fadeOut();
  })

  // id要素がfade-inの要素がクリックされたとき
  $('#fade-in').on('click', function() {
    // フェードイン
    $('#target').fadeIn();
  })
});