let carouselImages = new Array(6).fill(0).map((e,i) => `src/img/carousel/${i}.jpg`)

$(document).ready(() => {
    _changeBackground(0)
})

function _changeBackground(curItem) {
    curItem++
    $(`#img${curItem%2}`).attr("src",carouselImages[0])
    carouselImages.push(carouselImages.shift());

    if(curItem % 2 == 0) {
        $("#img1").fadeOut(2500)
    } else {
        $("#img1").fadeIn(2500)
    }

    setTimeout(() => {_changeBackground(curItem)}, 15000)
}