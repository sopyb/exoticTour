let locales = {
    "ro-RO": {},
    "en-US": {}
}

Object.keys(locales).forEach(key => {
    $.ajax({
        url: `src/localizations/${key}.json`,
        async: false,
        dataType: "json",
        success: (data) => {
            locales[key] = data
        }
    })
})


$(document).ready(() =>  {
    let language = localStorage.getItem("lang");
    if (!language) {
        language = "ro-RO"
        localStorage.setItem("lang", "ro-RO");
    }

    $('#languageSelector').prop("selectedIndex",Object.keys(locales).findIndex(e => e == language))

    $('#languageSelector').change((event) => {
        changeLang(event.target[event.target.selectedIndex].value)
    })

    $('*[onload]').trigger('onload');
})

function changeLang(locale) {
    if (Object.keys(locales).includes(locale)) localStorage.setItem("lang", locale);
    $('*[onload]').trigger('onload');
}

function getLocaleString(string, /*items*/) {
    let items = Array.prototype.slice.call(arguments, 1),
        result = locales[localStorage.getItem("lang")][string] || locales["en-US"][string] || "String missing"

    for (let i = 0; i < items.length; i++) {
        result = result.replaceAll(`{${i}}`, items[i])
    }

    return result
}