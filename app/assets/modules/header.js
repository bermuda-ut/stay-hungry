let elem;

if (window.location.pathname === "/") {
    elem = document.getElementById("blog");

} else if (window.location.pathname.indexOf("about") >= 0) {
    elem = document.getElementById("about");
}

elem.classList.add("inverse");
elem.classList.add("disabled");
elem.setAttribute("href", "#");
