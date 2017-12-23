if(window.location.pathname === "/") {
    document.getElementById("blog").classList.add("inverse");
    document.getElementById("blog").setAttribute("href", "#");
} else if(window.location.pathname.indexOf("about") >= 0) {
    document.getElementById("about").classList.add("inverse");
    document.getElementById("about").setAttribute("href", "#");
}