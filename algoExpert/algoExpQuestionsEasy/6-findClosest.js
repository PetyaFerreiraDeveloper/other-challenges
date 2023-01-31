function findClosest(tree, target) {
    let closestValue = tree.value;
    let minDiff = Infinity;

    bstHelper(tree, target);

    function bstHelper(helperTree) {
        if(!helperTree) return;

        let diff = target - helperTree.value;
        if(Math.abs(diff) < minDiff) {
            minDiff = Math.abs(diff);
            closestValue = helperTree.value;
        }
        if(diff === 0) {
            return target.value;
        } else if (diff > 0) {
            bstHelper(helperTree.right);
        } else {
            bstHelper(helperTree.left);
        }
    }
    return closestValue;
}