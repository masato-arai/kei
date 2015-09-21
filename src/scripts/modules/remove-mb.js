var init = function() {
    var $blockVideo = $('.block--video');
    var nextVideoBlock = $blockVideo.next('.block');
    if(nextVideoBlock.hasClass('block--video')) {
        $blockVideo.addClass('remove-mb');
    }
    $('.block--video:last-child').removeClass('remove-mb');
}

exports.init = init;