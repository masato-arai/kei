var Flickity = require('flickity');



var init = function() {
    var homeCarousel = document.querySelector('.home-carousel');
    var newsCarousel = document.querySelector('.news__item');
    $(function() {
        var flkty = new Flickity( homeCarousel, {
            imagesLoaded: true,
            autoPlay: 6000,
            pageDots: false,
            wrapAround: true,
            setGallerySize: false,
            cellSelector: '.home-carousel__cell',
            selectedAttraction: 0.01,
            friction: 0.15
        });

        var projectName = $(flkty.selectedElement).find('.home-carousel__link').find('.home-carousel__img').attr("alt");
        $('.caption--project').text(projectName);
        flkty.on( 'cellSelect', function() {
            var projectName = $(flkty.selectedElement).find('.home-carousel__link').find('.home-carousel__img').attr("alt");
            $('.caption--project').text(projectName);
        });
    });

    var flkty = new Flickity( newsCarousel, {
        autoPlay: 4000,
        draggable: false,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        setGallerySize: true,
        cellSelector: '.news__cell'
    });

}

exports.init = init;