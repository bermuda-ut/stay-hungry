let elem;
let disableLink = true;

if (window.location.pathname === "/") {
    elem = document.getElementById("blog");

} else if (window.location.pathname.indexOf("about") >= 0) {
    elem = document.getElementById("about");

} else if (window.location.pathname.indexOf("posts") >= 0) {
    elem = document.getElementById("blog");
    disableLink = false;
}

elem.classList.add("inverse");

if (disableLink) {
    elem.classList.add("disabled");
    elem.setAttribute("href", "#");
}
