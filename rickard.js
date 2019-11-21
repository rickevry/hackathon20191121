const createSymbolTree_rec = function (allShapes) {

    let parentCountArray = allShapes.reduce((acc, shape) => {
        const parents = allShapes.filter((s) => isInside(s, shape));
        const parentCount = parents.length;
        shape.parents = parents;
        if (!acc[parentCount]) {
            acc[parentCount] = [];
        }
        acc[parentCount].push(shape);
        return acc;
    }, []);

    let getChildren = (parent, level) => {
        let shapes = parentCountArray[level];
        let shapes2 = shapes ? shapes.filter(shape => !parent || isInside(parent, shape)) : [];
        return shapes2.map((shape) => {
            let childShapes = getChildren(shape, level + 1);
            return {
                title: shape.titles.uk ? shape.titles.uk : "",
                shapes: childShapes,
                parents: undefined
            };
        });
    }
    return getChildren(null, 0);
}

let createSymbolTree = function (symbols) {
    return createSymbolTree_rec(symbols);
}
