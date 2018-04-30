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

//Scroll top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
  

