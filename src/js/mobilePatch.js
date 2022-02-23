$(document).ready(() => {
    $("#start").height(window.innerHeight)

    $(window).resize((e) => {
        $("#start").height(window.innerHeight)
    })
})