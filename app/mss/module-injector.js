import {injectContent} from "./content-injector";

document.addEventListener('DOMContentLoaded', () => {
    let doms = document.getElementsByClassName("module");

    for (let i = 0; i < doms.length; i++) {
        let cls = doms[i].classList;
        let injected = false;

        for (let j = 0; j < cls.length; j++) {
            if (cls[j].indexOf("module-") === 0) {
                injectContent(doms[i], "module", cls[j].substr(7));
                injected = true;
                break;
            }
        }

        if (!injected)
            console.log(`${doms[i].id} does not have any module set to inject`);
    }

});
