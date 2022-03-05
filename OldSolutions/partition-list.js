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

var partition = function (head, x) {
  let queue = [];
  let newList = { val: 0, next: head };
  let prev = newList;
  let temp = prev.next;

  while (temp !== null) {
    if (temp.val >= x) {
      prev.next = temp.next;
      temp.next = null;
      queue.push(temp);
      temp = prev.next;
    } else {
      prev = temp;
      temp = temp.next;
    }
  }

  while (queue.length) {
    prev.next = queue.shift();
    prev = prev.next;
  }

  return newList.next;
};

let head = linkedList([1, 4, 3, 2, 5, 2]);
let x = 3;

console.log(listArray(partition(head, x)));

head = linkedList([2, 1]);
x = 2;

console.log(listArray(partition(head, x)));
