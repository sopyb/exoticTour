$(document).ready(function () {
    var anchor = window.location.hash.substring(1);
    let content = $("#content")
    content.load("src/html/" + getPage(anchor), () => {
        content.parent().height(content.outerHeight(true))
    })
});

function getPage(anchor) {
    switch (anchor) {
        case "about":
            return "aboutUs.html"
        case "contact":
            return "contact.html"
        case "ourOffer":
            return "ourOffer.html"
        default:
            return "home.html"
    }
}

async function changePage(page) {
    window.scrollTo({
        top: defaultNavbarOffset,
        behavior: "smooth"
    })

    if(!location.href.split("#")[1] && !page || location.href.split("#")[1] == (page || "home")) return;

    var url = location.href.split("#")[0];
    document.location = url + "#" + (page || "home");

    disableScroll()
    window.addEventListener('scroll', checkScroll);
    checkScroll()
}

function checkScroll() {

    if (window.scrollY <= defaultNavbarOffset) {
        enableScroll()
        window.removeEventListener('scroll', checkScroll);

        let content = $("#content")
        content.fadeOut(500, async () => {
            content.load("src/html/" + getPage(location.href.split("#")[1]), () => {
                content.parent().height(content.outerHeight(true))
                content.fadeIn(500)
            })
        })
    }
}


// Basically stolen from gblazex - https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
};

function preventDefault(e) {
    e.preventDefault();

    window.scrollTo({
        top: defaultNavbarOffset,
        behavior: "smooth"
    })
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () {
            supportsPassive = true;
        }
    }));
} catch (e) {}

var wheelOpt = supportsPassive ? {
    passive: false
} : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
