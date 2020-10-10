
  $('.slider').slick({
    

    // dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<img src="../images/arrow.png" class="slide-arrow next-arrow">',
    nextArrow: '<img src="../images/arrowright.png" class="slide-arrow prev-arrow">',
    accessibility: false,
    centerPadding: "5%",
    variableWidth: true,
    centerMode: true,

    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
    centerPadding: "5%",
    variableWidth: true,
    centerMode: true,

    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          accessibility: true,
          centerPadding: "5%",
          variableWidth: true,
          centerMode: true,
        }
      },

    
    ]
  });

