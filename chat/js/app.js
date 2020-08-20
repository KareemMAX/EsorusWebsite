$(document).ready(function() {
    changeHeaderStyle();

    // Side wrapper event listeners
    $('.side-menu-btn').click(function() {
        $('nav.side-bar').stop(true, true).toggleClass('open');
        $(this).toggleClass('open');
    });
    $(".side-bar-mobile-overlay").click(function() {
        $('nav.side-bar').stop(true, true).toggleClass('open');
        $('.side-menu-btn').toggleClass('open')
    });
    $('.side-bar ul > li a').click(function() {
        $(this).find("i").toggleClass('rotate-minus-180');
        $(this).parent().find("ul").toggleClass('open');
    });

    // Mobile chat event listeners
    $('.chat-person').click(function() {
        if ($(window).width() < 992) {
            $('.chat-history').toggleClass('mobile-active')
            $('.chat-list').toggleClass('mobile-active')
            $('header').toggleClass('mobile-active')
        }
    });

    $('.close-chat-btn').click(function() {
        $('.chat-history').toggleClass('mobile-active')
        $('.chat-list').toggleClass('mobile-active')
        $('header').toggleClass('mobile-active')
    });
});

$(window).resize(function(){
    // side-menu-wrapper still visible after resize bug fix
    if ($(window).width() > 992) {
        $('nav.side-bar').stop(true, true).removeClass('open');
        $('.side-menu-btn').removeClass('open')
    }
    changeHeaderStyle();
})

$(window).scroll(function() {
    changeHeaderStyle();
});

function changeHeaderStyle() {
    if ($(window).width() > 992) {
        var $nav = $(".navbar");
        var $header = $('header');

        $header.toggleClass('scrolled', $(this).scrollTop() > 1);

        if ($(this).scrollTop() < $nav.outerHeight(true)) {
            $header.height("auto");
        } else {
            $header.height($nav.outerHeight(true));

        }
    }
    // Header stays scrolled when resizing bug fix
    else{
        $('header').removeClass('scrolled');
    }
}
