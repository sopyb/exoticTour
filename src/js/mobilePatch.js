$(document).ready(() => {
    $("#start").height(window.innerHeight)
    $("#navbar").css("bottom", 0)

    $(window).resize(() => {
        $("#start").height(window.innerHeight)
        $("#navbar").css("bottom", 0)
    })
})