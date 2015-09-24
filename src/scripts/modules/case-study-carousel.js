var Flickity = require('flickity');
var $homeCarousel = $('.case-study-carousel');

var init = function() {
    if($homeCarousel.length) {
        // element argument can be a selector string
        //   for an individual element
        var flkty = new Flickity( '.case-study-carousel', {
            autoPlay: false,
            pageDots: true,
            wrapAround: true,
            setGallerySize: true,
            cellSelector: '.case-study-carousel__cell',
            selectedAttraction: 0.01,
            friction: 0.15
        });
    }
}

exports.init = init;