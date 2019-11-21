let data = [
    {
        "width": 758,
        "height": 322,
        "x": 531,
        "y": 235,
        "titles": {
            "uk": "A"
        }
    },
    {
        "width": 158,
        "height": 104,
        "x": 290,
        "y": 168,
        "titles": {
            "uk": "A1"
        }
    },
    {
        "width": 158,
        "height": 104,
        "x": 645,
        "y": 212,
        "titles": {
            "uk": "A2"
        }
    },
    {
        "width": 758,
        "height": 322,
        "x": 525,
        "y": 613,
        "titles": {
            "uk": "B"
        }
    },
    {
        "width": 158,
        "height": 104,
        "x": 284,
        "y": 546,
        "titles": {
            "uk": "B1"
        }
    },
    {
        "width": 158,
        "height": 104,
        "x": 1053,
        "y": 416,
        "titles": {
            "uk": "C"
        }
    }
];

let correctResult = [
    {
        "title": "A",
        "shapes": [
            {
                "title": "A1",
                "shapes": [],
            },
            {
                "title": "A2",
                "shapes": [],
            }
        ]
    },
    {
        "title": "B",
        "shapes": [
            {
                "title": "B1",
                "shapes": []
            }
        ]
    },
    {
        "title": "C",
        "shapes": [],
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
