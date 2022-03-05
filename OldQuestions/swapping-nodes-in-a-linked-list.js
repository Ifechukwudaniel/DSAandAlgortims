const {
  linkedListToArray,
  linkedListFromArray,
  //   ListNode,
} = require("./LinkedList/LinkedListFromArray");

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var swapNodes = function (head, k) {
  if (!head) return null;
  let listArray = [];
  let temp = head;
  while (temp) {
    listArray.push(temp.val);
    temp = temp.next;
  }
  let left = k - 1;
  let right = listArray.length - 1 - k + 1;

  while (left < right) {
    let temp = listArray[left];
    listArray[left] = listArray[right];
    listArray[right] = temp;
    left++;
    right--;
  }

  let count = 0;
  let dummy = new ListNode(0);
  let node = dummy;
  while (count < listArray.length) {
    node.next = new ListNode(listArray[count]);
    node = node.next;
    count++;
  }

  return dummy.next;
};

let head = linkedListFromArray([1, 2, 3, 4, 5]);
let k = 2;
console.log(linkedListToArray(swapNodes(head, k)));

head = linkedListFromArray([100, 90]);
k = 2;
console.log(linkedListToArray(swapNodes(head, k)));

head = linkedListFromArray([7, 9, 6, 6, 7, 8, 3, 0, 9, 5]);
k = 5;
console.log(linkedListToArray(swapNodes(head, k)));
