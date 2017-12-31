var randoms = [
    [
        "And this is why some commerce kids hate me",
        "Now you know why some PMs hate me :P",
        "Did I hurt you by saying this?",
    ],
    [
        "taste",
        "flavour",
        "*insert that could mean something sexual but makes sense in context*"
    ]
];

var clicks = [
    [
        "No More Shit-written-code Fuckery",
        "Ability to be a cunt and shout \"I am now a true web developer\"",
    ],
    [
        "I lied. It's a fucking gimmick, but it's hella fun.",
        "Haha. Jokes.",
    ],
    [
        "Fuck you, this is good enough and short enough. I am not wasting any more minute on setting up projects."
    ],
    [
        "The Section where I acknowledge I copied Someone but Refuse to Admit in doing so",
        "The Section where I tell you why I am Creative by the Least Creative Means"
    ],
    [
        "The two words corporates love to use to magically transform themselves as a modern hip company."
    ],
    [
        "Fucking fix your attitude. You don't have to find ALL the content, learn to live without having everything."
    ]
];

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < randoms.length; i++) {
        document.getElementById("random-" + i).innerText = randoms[i][Math.floor(Math.random() * randoms[i].length)]
    }

    for (let i = 0; i < clicks.length; i++) {
        document.getElementById("click-action-" + i).onclick = function () {
            this.innerText = clicks[i][Math.floor(Math.random() * clicks[i].length)];
        }
    }
});


