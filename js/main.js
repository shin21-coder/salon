
  

  //何かしらの処理


$(document).ready(function () {
  
  $('.slider').slick({
    
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<img src="../images/arrow.png" class="slide-arrow next-arrow">',
    nextArrow: '<img src="../images/arrowright.png" class="slide-arrow prev-arrow">',
    accessibility: false,
    centerPadding: "5%",
    // variableWidth: true,
    centerMode: true,

    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          accessibility: true,
          centerPadding: "5%",
          variableWidth: true,
          centerMode: true,
        }
      },
    
    ]
  });
  $('.slick').slick({

    // dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<img src="../images/arrow.png" class="slide-arrow next-arrow">',
    nextArrow: '<img src="../images/arrowright.png" class="slide-arrow prev-arrow">',
    accessibility: true,
    centerPadding: "7%",
    variableWidth: true,
    // centerMode: true,

    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          accessibility: true,
          centerPadding: "7%",
          variableWidth: true,
          // centerMode: true,
        }
      },

    
    ]
  });


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



var navPos = jQuery( '#global-nav' ).offset().top; // グローバルメニューの位置
  var navHeight = jQuery('#global-nav').outerHeight(); // グローバルメニューの高さ
  let fullwidth = $(window).outerWidth();
  console.log(fullwidth);
jQuery( window ).on( 'scroll', function() {
  if ( jQuery( this ).scrollTop() > navPos ) {
    // jQuery( 'body' ).css( 'padding-top', navHeight );
    jQuery( '#global-nav' ).addClass( 'm_fixed' );
  } else if (fullwidth < 800) {
    return
  }
  else {
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


// $('head').append(
//   '<style>body{display:none;}'
//   );
  // $(window).on("load", function() {
  // $('body').delay(600).fadeIn("slow");
  // });

  $(function(){
    $('.nav_toggle').on('click', function () {
      $('.nav_toggle, .nav').toggleClass('show');
      if ($('#nav').hasClass('show')) {
        console.log("fooo");
        $('.header__toggle').text("MENU CLOSE");
      } else {
        $('.header__toggle').text("MENU OPEN");
      }
    });
  })
  

});