const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

    constructor() {
        this._root = null;
    }

    root() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this._root;
    }

    add(data) {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let newNode = new Node(data);
        if (this._root === null)
            this._root = newNode;
        else
            this.insertNode(this._root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        } else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    has(data) {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.hasData(this._root, data)

    }

    hasData(node, data) {
        //node кончились - данных не найдено
        if (node === null)
            return false;
        else if (data < node.data)
            return this.hasData(node.left, data);
        else if (data > node.data)
            return this.hasData(node.right, data);

        //data = node.data
        else
            return true;
    }

    find(data) {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.findData(this._root, data)
    }

    findData(node, data) {
        //node кончились
        if (node === null)
            return null;
        else if (data < node.data)
            return this.findData(node.left, data);
        else if (data > node.data)
            return this.findData(node.right, data);
        //data = node.data
        else
            return node;
    }

    remove(data) {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        this._root = this.removeNode(this._root, data);
    }

    removeNode(node, data) {
        if (node === null)
            return null;
        else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        } else {
            // Deleting node no children
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            // Deleting node with two children

            let newNode = this.findMinNode(node.right);
            node.data = newNode.data;

            node.right = this.removeNode(node.right, newNode.data);
            return node;

        }

    }

    findMinNode(node) {
        // if left of a node is null
        // then it must be minimum node
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    min() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.minData(this._root)
    }

    minData(node) {
        if (node.left === null)
            return node.data;
        else
            return this.minData(node.left);
    }

    max() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.maxData(this._root)
    }
    maxData(node) {
        if (node.right === null)
            return node.data;
        else
            return this.maxData(node.right);
    }
}

module.exports = {
    BinarySearchTree
};