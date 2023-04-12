const {NotImplementedError} = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    getUnderlyingList() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.head
    }

    enqueue(value) {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let newNode = new ListNode()
        newNode.value = value

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    dequeue() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead.value;
    }
}

module.exports = {
    Queue
};
