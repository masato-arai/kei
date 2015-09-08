var init = function() {
    var $accordion = $('.accordion');
    var $accordionContents = $('.accordion__contents');
    var $accordionItem = $('.accordion__item');
    var $accordionTitle = $('.accordion__title');
    var accordionEase = 'easeInOutCubic';
    var accordionDuration = 800;

    $accordion.find($accordionContents).css({
        display: 'none',
        overflow: 'hidden'
    });
    
    $accordion.children($accordionTitle).on('click', function() {
        var $this = $(this);
        var $targetContainer =  $this.find($accordionContents);
        var $targetDescription =  $targetContainer.find($accordionItem).first();
        $accordionTitle.removeClass('active');
        $this.toggleClass('active');
        
        if(!$targetDescription.hasClass('active')) {
            $targetContainer.css('display', 'block');
            $targetDescription.css('margin-top', -$targetDescription.height());
            $targetDescription.velocity({ marginTop: 0}, { duration: accordionDuration, easing: accordionEase });
            $targetDescription.addClass('active');
        } else {
            $targetDescription.velocity({ marginTop: -$targetDescription.height()}, { duration: accordionDuration, easing: accordionEase });
            $targetDescription.removeClass('active');
        }
        return false;
    });
}

exports.init = init;