import {injectContent} from "./mss/content-injector";

document.addEventListener('DOMContentLoaded', () => {
    injectContent(document.getElementById("header"), "module", "header");
    injectContent(document.getElementById("footer"), "module", "footer");
});
