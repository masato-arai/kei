var init = function() {
    var  $accordion = $('.accordion-js');
    $accordion.find('div').css({ display : 'none', overflow : 'hidden'});
    
    $accordion.children('dt').click(function() {
        var $this = $(this);
        var $targetContainer =  $this.next('div');
        var $targetDescription =  $targetContainer.find('dd').first();
        $('.accordion-element__term').removeClass('active');
        $this.toggleClass('active');
        
        if(!$targetDescription.hasClass('active')) {
            $targetContainer.css('display', 'block');
            $targetDescription.css('margin-top', -$targetDescription.height());
            $targetDescription.velocity({ marginTop: 0}, { duration: 350 });
            $targetDescription.addClass('active');
        } else {
            $targetDescription.velocity({ marginTop: -$targetDescription.height()}, { duration: 350 });
            $targetDescription.removeClass('active');
        }
        return false;
    });
}

exports.init = init;