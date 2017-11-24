var init = function() {
    $(window).load(function() {
        $(".page-loader").velocity("fadeOut", { duration: 200 });
    })
}

exports.init = init;
