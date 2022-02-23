$(document).ready(function(){
    var anchor = window.location.hash.substring(1);

    $("#content").load("src/html/" + getPage(anchor))
});

function getPage(anchor) {
    switch(anchor) {
        default:
            return "home.html"
            
    }
}

async function changePage(page) {
    await window.scrollTo({
        top: $("#navbar")[0].getBoundingClientRect().top + window.pageYOffset,
        behavior: "smooth"
    })

    $("#content").load("src/html/" + getPage(page))

    var url = location.href.split("#")[0];
    document.location = url + "#" + (page || "home");
}