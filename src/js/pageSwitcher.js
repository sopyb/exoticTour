$(document).ready(function(){
    var anchor = window.location.hash.substring(1);

    $("#content").load("src/html/" + getPage(anchor))
});

function getPage(anchor) {
    switch(anchor) {
        case "about":
            return "aboutUs.html"
        case "contact":
            return "contact.html"
        default:
            return "home.html"
            
    }
}

async function changePage(page) {
    await window.scrollTo({
        top: defaultNavbarOffset,
        behavior: "smooth"
    })

    $("#content").load("src/html/" + getPage(page))

    var url = location.href.split("#")[0];
    document.location = url + "#" + (page || "home");
}