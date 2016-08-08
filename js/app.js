$(document).ready(function(){
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
    ryuReady +=  1;
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
    ryuReady -= 1;
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'left': '1020px'},
      500,
      function() {
        $('.hadouken').hide();
        $('.hadouken').css('left', '520px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
  $('body').keydown(function(e) {
    if (e.which == 88, ryuReady == 0) {
      $('.ryu-still').hide();
      $('.ryu-cool').show();
    }
    else if (e.which == 88, ryuReady == 1 ) {
      $('.ryu-ready').hide();
      $('.ryu-throwing').hide();
      $('.ryu-cool').show();
    }
  })
  .keyup(function(e){
    if (e.which == 88, ryuReady == 0) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
    else if (e.which == 88, ryuReady == 1) {
      $('.ryu-cool').hide();
      $('.ryu-ready').show();
    }
  });
});

var ryuReady = 0;

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
