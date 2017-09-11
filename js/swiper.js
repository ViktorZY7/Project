
$(document).ready(function(){
  $('.slider1').slick({
    dots: false,
  });
});
    

$(document).ready(function(){
  $('.slider2').slick({
  dots: false,
  slidesToShow: 4,
  arrow: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
});
    
