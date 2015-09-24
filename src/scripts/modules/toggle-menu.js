var toggleButton = $('.page-head--toggle');
var menu = $('.page-head--menus');

var toggleContent = function(e) {
    e.preventDefault();
    if (menu.hasClass('show')) {
        menu.removeClass('show');
        toggleButton.removeClass('close');
    } else {
        menu.addClass('show');
        toggleButton.addClass('close');
    }
    return false;
}


var init = function() {
    toggleButton.on('click', toggleContent);
}

exports.init = init;