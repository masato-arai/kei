var Flickity = require('flickity');
var $caseStudyCarousel = $('.case-study-carousel');

var init = function() {
    if($caseStudyCarousel.length) {
        // element argument can be a selector string
        //   for an individual element
        var flkty = new Flickity( '.case-study-carousel', {
            accessibility: false,
            adaptiveHeight: true,
            autoPlay: false,
            pageDots: true,
            wrapAround: true,
            setGallerySize: true,
            cellSelector: '.case-study-carousel__cell',
            imagesLoaded: true,
            arrowShape: { 
                x0: 10,
                x1: 60, y1: 50,
                x2: 60, y2: 30,
                x3: 30
            }
        });

        var carouselImageHeight = $('.case-study-carousel__cell').height();
        console.log(carouselImageHeight);
        $('.flickity-viewport').css('height', carouselImageHeight + 'px');
        console.log($('.flickity-viewport').height());
    }
}

exports.init = init;
