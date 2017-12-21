function injectContent(div, type, source) {
    if(type === "text") {
        div.innerHTML = source;

    } else if (type ==="module") {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if(this.readyState === 4) {
                if(this.status === 200) {
                    div.innerHTML = req.responseText;
                } else {
                    console.warn("Unable to find the module");
                }
            }
        };
        req.open("GET", window.location.origin + "/modules/" + source + ".html");
        req.send();
    }
}

module.exports = {
    injectContent
};