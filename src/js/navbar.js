let defaultNavbarOffset, navbar
$(window).ready(() => {
    navbar = $("#navbar")
    defaultNavbarOffset = navbar.offset().top
})

$(window).scroll(() => {
    var height = $(window).scrollTop();

    if (height >= defaultNavbarOffset) {
        navbar.addClass("fixToTop");
    } else {
        navbar.removeClass("fixToTop");
    }
})