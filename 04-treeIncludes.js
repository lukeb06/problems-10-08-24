/*
Write a function, treeIncludes, that takes in the root of a binary tree
and a target value. The function should return a boolean indicating whether
or not the value is contained in the tree.


*/

// DO NOT ALTER THIS CLASS
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/*

     a
   /   \
  b     c
 / \     \
d   e     f

*/

const treeIncludes = (root, targetVal, result = []) => {
    if (root) {
        result.push(root.val);
        treeIncludes(root.left, targetVal, result);
        treeIncludes(root.right, targetVal, result);
    }

    return result.includes(targetVal);
};

console.log(treeIncludes(a, 'e')); // -> true
console.log(treeIncludes(a, 'a')); // -> true
console.log(treeIncludes(a, 'n')); // -> false
