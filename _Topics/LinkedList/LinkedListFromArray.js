class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const linkedListFromArray = (arr) => {
  return arr.reduceRight((next, val) => new ListNode(val, next), null);
};

const linkedListToArray = (list, array = []) => {
  if (list === undefined) return null;
  if (list === null) return array;
  array[array.length] = list.val;
  return linkedListToArray(list.next, array);
};

module.exports = {
  linkedListFromArray,
  linkedListToArray,
  ListNode,
};

// console.log(listArray(linkedList([1, 2, 3, 4, 5]), 2));
// console.log(listArray(linkedList([1]), 2));
// console.log(listArray(linkedList([1, 2]), 1));
