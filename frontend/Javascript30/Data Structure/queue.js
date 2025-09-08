class QueueNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }
  enqueue(val) {
    const newVal = new QueueNode(val);
    if (this.size === 0) this.front = newVal;
    else this.back.next = newVal;
    this.back = newVal;
    this.size++;
  }
  dequeue() {
    if (this.size === 0) return null;
    var removed = this.front;
    this.front = removed.next;
    this.size--;
    if (this.size === 0) this.back = null;
    return removed;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue("b");
myQueue.enqueue("d");
myQueue.enqueue("v");

console.log(myQueue);

console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
