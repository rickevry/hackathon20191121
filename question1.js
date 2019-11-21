let data = [
    {
        "width": 758,
        "height": 322,
        "x": 595,
        "y": 311,
        "titles": {
            "uk": "A"
        },
        "_t": "Shape",
        "type": 0,
        "guid": "feb15414-f970-04ea-359e-75ac9f5c7a5b",
        "symbolTypeGuid": "d2929ced-2465-4bd0-ad10-ac1af30e5aab",
        "lastModifiedUtc": "2019-11-21T07:17:40.558Z",
        "properties": {
            "isContainer": true
        }
    },
    {
        "width": 158,
        "height": 104,
        "x": 440,
        "y": 248,
        "titles": {
            "uk": "A1"
        },
        "_t": "Shape",
        "type": 0,
        "guid": "66a627b1-08e8-2fa4-108e-ee9cca23d3e4",
        "symbolTypeGuid": "d2929ced-2465-4bd0-ad10-ac1af30e5aab",
        "lastModifiedUtc": "2019-11-21T07:17:55.046Z",
        "properties": {}
    },
    {
        "width": 158,
        "height": 104,
        "x": 749,
        "y": 344,
        "titles": {
            "uk": "A2"
        },
        "_t": "Shape",
        "type": 0,
        "guid": "dc337db6-0efb-8288-c4df-55bec733d2f0",
        "symbolTypeGuid": "d2929ced-2465-4bd0-ad10-ac1af30e5aab",
        "lastModifiedUtc": "2019-11-21T07:17:53.613Z",
        "properties": {}
    }
];


let correctResult = [
    {
        "guid": "feb15414-f970-04ea-359e-75ac9f5c7a5b",
        "title": "A",
        "properties": {
            "isContainer": true
        },
        "shapes": [
            {
                "guid": "66a627b1-08e8-2fa4-108e-ee9cca23d3e4",
                "title": "A1",
                "properties": {},
                "shapes": [],
                "lines": []
            },
            {
                "guid": "dc337db6-0efb-8288-c4df-55bec733d2f0",
                "title": "A2",
                "properties": {},
                "shapes": [],
                "lines": []
            }
        ],
        "lines": []
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
    let firstTry = inputData[1];
    return firstTry;
};


let myResult = parseTree(data);

let correct = JSON.stringify(correctResult) == JSON.stringify(myResult);

console.log("test if myResult equals correctResult is", correct);
