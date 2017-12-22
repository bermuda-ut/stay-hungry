function injectContent(div, type, source) {
    if (type === "text") {
        div.innerHTML = source;

    } else if (type === "module") {
        const reqBody = new XMLHttpRequest();
        reqBody.onreadystatechange = function () {
            if (reqBody.readyState === 4) {
                if (reqBody.status === 200) {
                    div.innerHTML = reqBody.responseText;
                    runModule(source);
                } else {
                    console.warn("Unable to find the module");
                }
            }
        };
        reqBody.open("GET", window.location.origin + "/modules/" + source + ".html");
        reqBody.send();
    }
}

function runModule(source) {
    const reqModuleJs = new XMLHttpRequest();
    reqModuleJs.onreadystatechange = function () {
        if (reqModuleJs.readyState === 4) {
            if (reqModuleJs.status === 200) {
                eval(reqModuleJs.responseText);
            }
        }
    };
    reqModuleJs.open("GET", window.location.origin + "/modules/" + source + ".js");
    reqModuleJs.send();
}

module.exports = {
    injectContent
};