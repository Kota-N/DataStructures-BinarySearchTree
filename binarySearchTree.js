class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return newNode;
    } else {
      let current = this.root;

      while (current) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return newNode;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return newNode;
          }
          current = current.right;
        }
      }
    }

    throw 'Somthing went wrong! (maybe an invalid input value)';
  }

  // Breadth First Search
  BFS() {
    if (!this.root) return [];

    const queue = [this.root];
    const output = [];

    while (queue.length) {
      const current = queue.shift();
      output.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return output;
  }

  DFSInorder() {
    return this._inorder(this.root, []);
  }
  _inorder(node, output) {
    if (node.left) this._inorder(node.left, output);
    output.push(node.value);
    if (node.right) this._inorder(node.right, output);

    return output;
  }

  DFSPreorder() {
    return this._preorder(this.root, []);
  }
  _preorder(node, output) {
    output.push(node.value);
    if (node.left) this._preorder(node.left, output);
    if (node.right) this._preorder(node.right, output);

    return output;
  }

  DFSPostorder() {
    return this._postorder(this.root, []);
  }
  _postorder(node, output) {
    if (node.left) this._postorder(node.left, output);
    if (node.right) this._postorder(node.right, output);
    output.push(node.value);
    return output;
  }
}

// Test

//      10
//  5       15
//1   8   12   25

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(25);
tree.insert(5);
tree.insert(1);
tree.insert(8);
tree.insert(12);

console.time('BFS');
const bfsArr = tree.BFS();
console.timeEnd('BFS');

const inorderArr = tree.DFSInorder();
const preorderArr = tree.DFSPreorder();
const postorderArr = tree.DFSPostorder();

console.log('BFS: ' + bfsArr);
console.log('In Order: ' + inorderArr);
console.log('Pre Order: ' + preorderArr);
console.log('Post Order: ' + postorderArr);
