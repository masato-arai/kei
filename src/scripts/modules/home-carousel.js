var Flickity = require('flickity');

var init = function() {
    var homeCarousel = document.querySelector('.home-carousel');
    var newsCarousel = document.querySelector('.news__item');
    var flkty = new Flickity( homeCarousel, {
        autoPlay: true,
        pageDots: false,
        wrapAround: true,
        setGallerySize: false,
        cellSelector: '.home-carousel__cell',
        selectedAttraction: 0.01,
        friction: 0.15
    });
    
    var flkty = new Flickity( newsCarousel, {
        autoPlay: 5000,
        draggable: false,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        setGallerySize: true,
        cellSelector: '.news__cell',
        friction: 0.4
    });

}

exports.init = init;