const KEYDOWN = 'keydown';
let keyInputs = {};

document.addEventListener('DOMContentLoaded', () => {
    onkeydown = onkeyup = function (e) {
        keyInputs[e.keyCode] = e.type === KEYDOWN;
    };
});

module.exports = {
    keyInputs
};