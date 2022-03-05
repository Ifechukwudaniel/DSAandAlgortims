let ListNode = (val, next = null) => {
  return { val, next };
};

let letMakeList = (arr) => {
  return arr.reduceRight((next, value) => LinkListNode(value, next), null);
};

const listArray = (list, array = []) => {
  if (list === undefined) return null;
  if (list === null) return array;
  array[array.length] = list.val;
  return listArray(list.next, array);
};

var rotateRight = function (head, k = 1) {
  if (k == 0) return head;
  if (!head) return head;
  if (!head.next) return head;
  let length = 1;
  let lastNode = null;
  let tail = head;

  while (tail.next) {
    tail = tail.next;
    length++;
  }

  if (k >= length) k = k % length;

  if (k == 0) return head;

  let currentNode = head;
  for (let i = 0; i < length - k - 1; i++) {
    currentNode = currentNode.next;
  }

  lastNode = currentNode.next;
  currentNode.next = null;
  tail.next = head;
  return lastNode;
};

let x1 = letMakeList([1, 2, 3, 4]);
console.log(listArray(rotateRight(x1, 19)));
