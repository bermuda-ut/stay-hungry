const KEYDOWN = 'keydown';
let keyInputs = {};

document.addEventListener('DOMContentLoaded', () => {
    onkeydown = onkeyup = function (e) {
        console.log(e.keyCode);
        keyInputs[e.keyCode] = e.type === KEYDOWN;
    };
});

module.exports = {
    keyInputs
};