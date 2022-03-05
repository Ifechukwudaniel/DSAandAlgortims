const linkedList = (arr) =>
  arr.reduceRight((next, val) => {
    return { val, next };
  }, null);

const listArray = (list, array = []) => {
  if (list === undefined) return null;
  if (list === null) return array;
  array[array.length] = list.val;
  return listArray(list.next, array);
};

var deleteMiddle = function (head) {
  if (!head) return null;
  let count = 0;
  let node = head;

  while (node.next) {
    count++;
    node = node.next;
  }

  if (count == 0) return [];

  node = head;
  let middle = Math.ceil(count / 2);

  count = 0;
  console.log(middle);
  let leftHalf = null;
  let prev = null;

  while (count < middle) {
    prev = node;
    node = node.next;
    count++;
  }

  leftHalf = node.next;
  prev.next = leftHalf;
  return head;
};

let head = linkedList([1, 3, 4, 7, 1, 2, 6]);
console.log(listArray(deleteMiddle(head)));

head = linkedList([1, 2, 3, 4]);
console.log(listArray(deleteMiddle(head)));

head = linkedList([2, 1]);
console.log(listArray(deleteMiddle(head)));

head = linkedList([2]);
console.log(listArray(deleteMiddle(head)));
