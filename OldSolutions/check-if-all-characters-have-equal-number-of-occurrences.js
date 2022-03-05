let LinkListNode = (val, next = null) => {
  return { val, next };
};

let letMakeList = (arr) => {
  return arr.reduceRight((next, value) => LinkListNode(value, next), null);
};

let reverseList = (head) => {
  let currentNode = head;
  let prev = null;
  let next = null;

  while (currentNode) {
    next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
  }
  return prev;
};

let llToArray = (list, array = []) => {
  if (!list) return array;
  array.push(list.val);
  return llToArray(list.next, array);
};

var mergeInBetween = function (list1, a, b, list2) {
  let currentNode = list1;
  let firstHalf = null;
  let secondHalf = null;
  let n = 0;
  while (currentNode) {
    if (n == a) firstHalf = currentNode;
    if (n == b + 1) {
      secondHalf = currentNode;
      break;
    }
    currentNode = currentNode.next;
    n++;
  }

  firstHalf.next = list2;
  currentNode = firstHalf;
  while (currentNode.next) currentNode = currentNode.next;
  currentNode.next = secondHalf;

  return list1;
};

// example
let list1 = letMakeList([0, 1, 2, 3, 4, 5]);
let list2 = letMakeList([10, 11, 12, 13, 14, 15]);

let answer = mergeInBetween(list1, 2, 4, list2);

console.log(llToArray(answer));

// head = letMakeList([1, 2]);
// console.log(deleteNode(head.next));

// head = letMakeList([1, 2, 3, 1]);
// console.log(deleteNode(head.next.next));
