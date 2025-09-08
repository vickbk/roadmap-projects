class StackNode {
  private val: any;
  private next: StackNode | null;

  constructor(val) {
    this.val = val;
    this.next = null;
  }
  setNext(val: StackNode) {
    this.next = val;
  }
  getVal() {
    return this.val;
  }
  getNext() {
    return this.next;
  }
}

class Stack {
  [x: string]: any;
  private top: StackNode | null = null;
  size: number = 0;
  constructor() {
    this.top = null;
  }
  push(val) {
    const newItem = new StackNode(val);
    if (this.size !== 0 && this.top) {
      newItem.setNext(this.top);
    }
    this.top = newItem;
    this.size++;
  }
  pop() {
    if (this.size === 0) return null;
    const popped = this.top;
    this.top = this.top?.getNext() ?? null;
    this.size--;
    return popped;
  }
  getTop() {
    return this.top?.getVal();
  }
}

const myStack = new Stack();
myStack.push(2);
myStack.push("a");
console.log(myStack.getTop(), myStack.size);
