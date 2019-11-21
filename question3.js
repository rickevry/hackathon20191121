let data = [
    {
        "width": 1282,
        "height": 733,
        "x": 771,
        "y": 389,
        "titles": {
            "uk": "Root"
        }
    },
    {
        "width": 758,
        "height": 322,
        "x": 556,
        "y": 204,
        "titles": {
            "uk": "A"
        }
    },
    {
        "width": 279,
        "height": 226,
        "x": 375,
        "y": 198,
        "titles": {
            "uk": "A1"
        }
    },
    {
        "width": 307,
        "height": 201,
        "x": 744,
        "y": 229,
        "titles": {
            "uk": "A2"
        }
    },
    {
        "width": 758,
        "height": 322,
        "x": 550,
        "y": 582,
        "titles": {
            "uk": "B"
        }
    },
    {
        "width": 279,
        "height": 253,
        "x": 369,
        "y": 589,
        "titles": {
            "uk": "B1"
        }
    },
    {
        "width": 342,
        "height": 404,
        "x": 1152,
        "y": 302,
        "titles": {
            "uk": "C"
        }
    },
    {
        "width": 64,
        "height": 40,
        "x": 322,
        "y": 140,
        "titles": {
            "uk": "A1a"
        }
    },
    {
        "width": 64,
        "height": 40,
        "x": 445,
        "y": 153,
        "titles": {
            "uk": "A1b"
        }
    },
    {
        "width": 64,
        "height": 40,
        "x": 339,
        "y": 260,
        "titles": {
            "uk": "A1c"
        }
    },
    {
        "width": 64,
        "height": 40,
        "x": 664,
        "y": 173,
        "titles": {
            "uk": "A2a"
        }
    },
    {
        "width": 64,
        "height": 40,
        "x": 307,
        "y": 512,
        "titles": {
            "uk": "B1a"
        }
    },
    {
        "width": 64,
        "height": 40,
        "x": 1047,
        "y": 160,
        "titles": {
            "uk": "C1a"
        }
    }
];

let correctResult = [
    {
        "title": "Root",
        "shapes": [
            {
                "title": "A",
                "shapes": [
                    {
                        "title": "A1",
                        "shapes": [
                            {
                                "title": "A1a",
                                "shapes": []
                            },
                            {
                                "title": "A1b",
                                "shapes": []
                            },
                            {
                                "title": "A1c",
                                "shapes": []
                            }
                        ]
                    },
                    {
                        "title": "A2",
                        "shapes": [
                            {
                                "title": "A2a",
                                "shapes": []
                            }
                        ]
                    }
                ]
            },
            {
                "title": "B",
                "shapes": [
                    {
                        "title": "B1",
                        "shapes": [
                            {
                                "title": "B1a",
                                "shapes": []
                            }
                        ]
                    }
                ]
            },
            {
                "title": "C",
                "shapes": [
                    {
                        "title": "C1a",
                        "shapes": []
                    }
                ]
            }
        ]
    }
];

let isInside = function (parent, child) {
    const cw = child.width / 2;
    const pw = parent.width / 2;
    const ch = child.height / 2;
    const ph = parent.height / 2;

    if ((child.x - cw > parent.x - pw) && ((child.x + cw) < (parent.x + pw))) {
        if ((child.y - ch > parent.y - ph) && ((child.y + ch) < (parent.y + ph))) {
            return true;
        }
    }
    return false;
}

function parseTree(inputData) {
    // write your code here
    let firstTry = inputData[1];
    // write your code here

    return firstTry;
};


let myResult = parseTree(data);

let correct = JSON.stringify(correctResult) == JSON.stringify(myResult);

console.log("test if myResult equals correctResult is", correct);
