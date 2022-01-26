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

var reorderList = function (head) {
  let stack = [];
  let count = 0;
  let temp = head;
  let newList = { val: 0, next: null };
  let node = null;
  while (temp != null) {
    stack.push(temp);
    temp = temp.next;
  }

  temp = newList;

  while (stack.length) {
    if (count % 2 == 0) {
      node = stack.shift();
      node.next = null;
      temp.next = node;
    } else {
      node = stack.pop();
      node.next = null;
      temp.next = node;
    }
    count++;
    temp = temp.next;
  }
  return newList.next;
};

let head = linkedList([1, 2, 3, 4]);
console.log(reorderList(head));
head = linkedList([1, 2, 3, 4, 5]);
console.log(reorderList(head));
