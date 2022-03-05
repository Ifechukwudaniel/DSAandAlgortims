const {
  linkedListToArray,
  linkedListFromArray,
  ListNode,
} = require("./LinkedList/LinkedListFromArray");

// var swapPairs = function (head) {
//   if (head == null || head.next == null) return head;
//   let n = head.next;
//   head.next = swapPairs(head.next.next);
//   n.next = head;
//   return n;
// };

var swapPairs = function (head) {
  if (head == null || head.next == null) return head;
  let dummy = new ListNode(0, head);
  let curr = head;
  let prev = dummy;
  while (curr && curr.next) {
    let next = curr.next.next;
    let second = curr.next;

    // reverse
    second.next = curr;
    curr.next = next;
    prev.next = second;

    prev = curr;
    curr = next;
  }
  return dummy.next;
};

let head = linkedListFromArray([1, 2, 3, 4, 5, 6, 7]);
console.log(linkedListToArray(swapPairs(head)));
