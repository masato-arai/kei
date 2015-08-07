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

/*
    var $caption = $('.caption');
    // Flickity instance
    var $caption = flkty.data('flickity');
    
    $caption.on( 'cellSelect', function() {
        // set image caption using img's alt
        $caption.text( flkty.selectedElement.alt )
    });
*/
}

exports.init = init;