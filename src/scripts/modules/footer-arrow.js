var init = function() {
    $('.arrow--page-foot').bind("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('html').velocity("scroll", {
            duration: 1500,
            offset: 0,
            easing: "easeInOutCubic"
        });
    });
}

exports.init = init;