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
const e = new Node("E");
const f = new Node("F");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const reverseList = (head) => {
  if (head === null) return;
  const { next } = head;
  const val = reverseList(next);
  if (!next) return head;
  next.next = head;
  head.next = null;
  return val ?? head;
};

// const results = reverseList(a);
// console.log(results);

const reverseListIterative = (head) => {
  let current = head;
  let prev = null;
  while (current !== null) {
    const { next } = current;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

// console.log(reverseListIterative(a));

const recursiveTwo = (head, prev = null) => {
  if (head === null) return prev;
  const { next } = head;
  head.next = prev;
  return recursiveTwo(next, head);
};

console.log(recursiveTwo(a));
