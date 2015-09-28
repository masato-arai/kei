var $descriptionArrow = $('.description__arrow');
var $arrow = $('.arrow');

var init = function() {
    $arrow.bind("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).velocity("scroll", {
            duration: 1500,
            offset: -174,
            easing: "easeInOutCubic"
        });
    });

/*
    $(window).scroll(function(){
        var windowTop = $(this).scrollTop();
        var headerHeight = 175;
        var $arrow = $('.arrow');
        var arrowTopDistance = $arrow.offset().top;
        var arrowTopPosition = arrowTopDistance - windowTop;
        if(arrowTopPosition < headerHeight){
            $arrow.stop().animate({"opacity":0},{duration:300});
        } else {
            $arrow.stop().animate({"opacity":1},{duration:300});
        }
    });
*/
}

exports.init = init;