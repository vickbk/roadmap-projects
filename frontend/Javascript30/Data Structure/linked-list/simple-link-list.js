class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

const printIterator = (head) => {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
};
// printIterator(a);

const printRecursively = (head) => {
  if (head === null) return;
  printRecursively(head.next);
  console.log(head.val);
};

printRecursively(a);
