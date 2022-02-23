$(document).ready(function(){
    var anchor = window.location.hash.substring(1);

    $("#content").load("src/html/" + getPage(anchor))

    let language = localStorage.getItem("lang");
    if (!language) {
        language = "ro-RO"
        localStorage.setItem("lang", "ro-RO");
    }
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
    document.location = url + "#" + page;
    // history.replaceState({}, '', '/'); 

}

function changeLang(locale) {
    if (["ro-RO", "en-US"].includes(locale)) localStorage.setItem("lang", locale);
}