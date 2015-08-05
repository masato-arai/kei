var Flickity = require('flickity');

var init = function() {
    // element argument can be a selector string
    //   for an individual element
    var flkty = new Flickity( '.home-carousel', {
        autoPlay: true,
        pageDots: false,
        wrapAround: true,
        setGallerySize: false,
        cellSelector: '.home-carousel__cell',
        selectedAttraction: 0.01,
        friction: 0.15
    });
}

exports.init = init;