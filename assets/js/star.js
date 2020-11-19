for (var i = 0; i < 100; i++) {
  var star =
    '<div class="star m-0" style="animation: twinkle ' +
    (Math.random() * 5 + 5) +
    's linear ' +
    (Math.random() * 1 + 1) +
    's infinite; top: ' +
    Math.random() * $(window).height() +
    'px; left: ' +
    Math.random() * $(window).width() +
    'px;"></div>';
  $('.homescreen').append(star);
}
