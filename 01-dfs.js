/*

Write a function called depthFirstValues.
It will take in a root node. Add all the values into an array in a Depth First order.

The function should return an array.

HINT: Consider if Depth first will use a STACK or a QUEUE

*/

// DO NOT ALTER THIS CLASS
class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
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

const depthFirstValues = (root, values = []) => {
    if (root) {
        values.push(root.val);
        depthFirstValues(root.left, values);
        depthFirstValues(root.right, values);
    }
    return values;
};

let result = depthFirstValues(a);
console.log(result);
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
