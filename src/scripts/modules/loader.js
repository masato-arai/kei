var init = function() {
    $(window).load(function() {
        $(".page-loader").velocity("fadeOut", { duration: 400 });
    })
}

exports.init = init;