var init = function() {
    var $accordionContents = $('.accordion__contents');
    var $accordionItem = $('.accordion__item');

    $('.accordion__header').on('click', function() {
        var $targetContainer = $(this).next($accordionContents);
        var $targetDescription =  $targetContainer.find($accordionItem).first();

        if(!$targetDescription.hasClass('active')) {
            $targetDescription.velocity("slideDown", { duration: 500, easing: 'easeInOutCubic' });
            $targetDescription.addClass('active');
        } else {
            $targetDescription.velocity("slideUp", { duration: 500, easing: 'easeInOutCubic' });
            $targetDescription.removeClass('active');
        }
        return false;
    });
}

exports.init = init;