$(document).ready(function(){
    $('.nav-head').click(function(){
        $('.collapse').collapse('hide');
    });
    
    $(".center").slick({
            slidesToShow: 7,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: false,
            nextArrow: false
          });
});

  

