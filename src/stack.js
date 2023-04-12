const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
    constructor() {
        this._size = 0;
        this._storage = {};
    }

    push(data) {
        this._storage[this._size] = data;
        this._size++;
    }

    pop() {
        if (this._size == 0)
            return null;
        let deletedData = this._storage[this._size - 1];
        delete this._storage[this._size - 1];
        this._size--;
        return deletedData;
    }

    peek() {
        if (this._size == 0)
            return undefined;
        return this._storage[this._size - 1]
    }
}

module.exports = {
    Stack
};
