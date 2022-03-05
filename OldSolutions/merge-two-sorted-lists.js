const LinkedNode = (val, next = null) => {
  return { val, next };
};
const linkedList = (arr) =>
  arr.reduceRight((next, val) => {
    return LinkedNode(val, next);
  }, null);

const listArray = (list, array = []) => {
  if (list === undefined) return null;
  if (list === null) return array;
  array[array.length] = list.val;
  return listArray(list.next, array);
};

var partition = function (head, x) {
  let left = LinkedNode(0);
  let right = LinkedNode(0);
  let leftTail = left;
  let rightTail = right;
  while (head) {
    if (head.val < x) {
      leftTail.next = head;
      leftTail = leftTail.next;
    } else {
      rightTail.next = head;
      rightTail = rightTail.next;
    }
    head = head.next;
  }
  leftTail.next = right.next;
  rightTail.next = null;
  return left.next;
};

let list = linkedList([3, 2, 1, 3, 4, 5, 6]);
console.log(listArray(partition(list, 3)));

//2)
list = linkedList([]);
console.log(listArray(partition(list, 3)));

//3
// list = linkedList([3, 1, 8, 4, 10, 3, 7]);
// console.log(listArray(partition(list, 5)));
