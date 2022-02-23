let defaultNavbarOffset, navbar
$(window).ready(() => {
    navbar = $("#navbar")
    defaultNavbarOffset = navbar.offset().top

    if ($(window).scrollTop() > defaultNavbarOffset) {
        navbar.addClass("fixToTop");
    } else {
        navbar.removeClass("fixToTop");
    }
})

$(window).scroll(() => {
    var height = $(window).scrollTop();

    if (height > defaultNavbarOffset) {
        navbar.addClass("fixToTop");
    } else {
        navbar.removeClass("fixToTop");
    }
})