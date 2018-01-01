const randoms = [
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

const clicks = [
    [
        "No More Shit-written-code Fuckery",
        "Ability to be a cunt and shout \"I am now a true web developer\"",
    ],
    [
        "I lied. It's a fucking gimmick, but it's hella fun.",
        "Haha. Jokes.",
    ],
    [
        "Fuck you, this was good and short enough."
    ],
    [
        "The Section where I acknowledge I copied Someone but Refuse to Admit in doing so",
        "The Section where I tell you why I am Creative by the Least Creative Means"
    ],
    [
        "The two words that corporates love to use to magically transform themselves as a modern hip company."
    ],
    [
        "Fucking fix your attitude. You don't have to find ALL the content, learn to live without having everything."
    ],
    [
        "(I need friends)",
        "(I know, I'm hilarious)",
    ],
    [
        "wherever possible (by that I mean, only in the header image)"
    ],
    [
        "But wait, I do web development! (whether 'web development' was something I wanted or not is another tl;dr post)",
        "But wait, I have experience fucking around with npm packages!",
        "But wait, I could be one of those kids without proper coding or software design experience but claim to be a web developer!"
    ],
    [
        "any other modern web applications",
        "most websites, including whatever you are working on",
    ],
    [
        "potential shit code"
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


