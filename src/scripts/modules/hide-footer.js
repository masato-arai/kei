var init = function() {
    var currentPath = window.location.pathname;
    if(currentPath == '/projects' || currentPath == '/') {
        $('.page-foot, .page-foot__arrow').addClass('hide');
    }
}

exports.init = init;