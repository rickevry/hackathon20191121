let data = [
    {
        "width": 758,
        "height": 322,
        "x": 595,
        "y": 311,
        "titles": {
            "uk": "A"
        }
    },
    {
        "width": 158,
        "height": 104,
        "x": 440,
        "y": 248,
        "titles": {
            "uk": "A1"
        }
    },
    {
        "width": 158,
        "height": 104,
        "x": 749,
        "y": 344,
        "titles": {
            "uk": "A2"
        }
    }
];


let correctResult = [
    {
        "title": "A",
        "shapes": [
            {
                "title": "A1",
                "shapes": []
            },
            {
                "title": "A2",
                "shapes": []
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
