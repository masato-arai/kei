var $arrow = $('.arrow');
var waypoints = require('waypoints');
var headerHeight = 175;

var init = function() {
    $arrow.bind("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).velocity("scroll", {
            duration: 1500,
            offset: -headerHeight,
            easing: "easeInOutCubic"
        });
    });

    $arrow.each(function() {
        new Waypoint({
            element: this,
            handler: function(direction) {
                if (direction === 'down') {
                  $(this.element).animate({ opacity: 0 })
                } else {
                  $(this.element).animate({ opacity: 1 })
                }
            },
            offset: headerHeight + 1
        });
    });
}

exports.init = init;