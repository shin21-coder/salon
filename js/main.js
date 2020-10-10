
  

  //何かしらの処理


$(document).ready(function () {
  $("#goto_top").hide();
  $(function () {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $('#goto_top').fadeIn();
          } else {
              $('#goto_top').fadeOut();
          }
      });

      $('#goto_top a').click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
  });
});


var navPos = jQuery( '#global-nav' ).offset().top; // グローバルメニューの位置
var navHeight = jQuery( '#global-nav' ).outerHeight(); // グローバルメニューの高さ
jQuery( window ).on( 'scroll', function() {
  if ( jQuery( this ).scrollTop() > navPos ) {
    // jQuery( 'body' ).css( 'padding-top', navHeight );
    jQuery( '#global-nav' ).addClass( 'm_fixed' );
  } else {
    jQuery( 'body' ).css( 'padding-top', 0 );
    jQuery( '#global-nav' ).removeClass( 'm_fixed' );
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
      $('#global-nav').fadeIn();
  } else {
      $('#global-nav').fadeOut();
  }
});

$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 200){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
  });
});


$('head').append(
  '<style>body{display:none;}'
  );
  $(window).on("load", function() {
  $('body').delay(600).fadeIn("slow");
  });


