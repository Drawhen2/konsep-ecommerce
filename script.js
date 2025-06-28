$("#mynavbar-toggle").click(function () {
    $("#mynavbar").toggle();
});

$('.dropdown-menu .dropdown-toggle').on('click', function () {

    var $el = $(this);
    var $parent = $el.offsetParent(".dropdown-menu");

    if (!$el.next().hasClass("show")) {
        $el.parents('.dropdown-menu').first().find(".show").removeClass("show");
    }
    $el.next(".dropdown-menu").toggleClass("show").parent("li").toggleClass("show");

    $el.parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown", function () {
        $(".dropdown-menu .show").removeClass("show");
    });

    if (!$parent.parent().hasClass("navbar-nav")) {
        $el.next().css({ "top": $el[0].offsetTop, "left": $parent.outerWidth() });
    }

    return false;
});

$('.mysearch-toggle').on('click', function () {
    if ($('.mysearch').is(':visible')) {
        $(".mysearch").slideUp()
    } else {
        $(".mysearch").slideDown()
    }
});
var ch = 0;
function header_spacer() {
    var h = $('#header').height();
    if (h != ch) {
        $('#navbar-spacer').height(h);
    }
    setTimeout('header_spacer()', 100);
}
header_spacer();

$.post("/template-manager/logo-update/");

execIframeSetup(0, "ifrNotify"); // Assuming execIframeSetup is defined in execIframe.js

modalSBoxSetup(); // Assuming modalSBoxSetup is defined elsewhere or in basic.js

var scroll_time = 500;
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, scroll_time);
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $("a[href='#top']").fadeIn();
    } else {
        $("a[href='#top']").fadeOut();
    }
});

$(document).ready(function () {
    $(".carousel").carousel();
    AOS.init({ easing: "ease-out-sine", once: true, offset: 50, duration: 600 });
});