class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// a -> b -> c -> d -> e -> f

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

//  a   ->    b   ->    c   ->    d   ->    e   ->    f
//            cur1      nex1
//  x   ->    y   ->    z
//            cur2      nex2
//  a   ->    x   ->    b   ->    y   ->    c   ->    z   ->    d   ->    e   ->    f
//                      cur1      cur2
const zipperListIterative = (head1, head2) => {
  let current1 = head1.next;
  let current2 = head2.next;
  let zipped = head1;
  zipped.next = head2;
  let last = zipped.next;
  while (current1 !== null && current2 !== null) {
    const { next: next1 } = current1;
    const { next: next2 } = current2;

    last.next = current1;
    last = last.next;
    last.next = current2;
    last = last.next;

    current1 = next1;
    current2 = next2;
  }
  last.next = current1 ?? current2;
  return zipped;
};

// console.log(zipperListIterative(a, x));

const zipperListRecursive = (head1, head2) => {
  if (head1 === null || head2 === null) return head1 ?? head2;
  const { next: next1 } = head1;
  const { next: next2 } = head2;
  const zipped = head1;
  zipped.next = head2;
  zipped.next.next = zipperListRecursive(next1, next2);
  return zipped;
};

console.log(zipperListRecursive(a, x));
