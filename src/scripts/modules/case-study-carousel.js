var Flickity = require('flickity');
var $caseStudyCarousel = $('.case-study-carousel');

var init = function() {
    if($caseStudyCarousel.length) {
        // element argument can be a selector string
        //   for an individual element

        var flkty = new Flickity( '.case-study-carousel', {
            autoPlay: false,
            pageDots: true,
            wrapAround: true,
            setGallerySize: true,
            cellSelector: '.case-study-carousel__cell',
            arrowShape: { 
                x0: 10,
                x1: 60, y1: 50,
                x2: 60, y2: 30,
                x3: 30
            }
        });

    }
}

exports.init = init;
