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
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    if (fast) slow = slow.next;
  }

  let mid = slow.next;
  let cur = mid;
  slow.next = null;

  let halfReversedList = null;

  while (cur) {
    let next = cur.next;
    cur.next = halfReversedList;
    halfReversedList = cur;
    cur = next;
  }

  cur = head;

  while (cur && halfReversedList) {
    let tempFirst = cur.next;
    let tempSecond = halfReversedList.next;

    cur.next = halfReversedList;
    halfReversedList.next = tempFirst;
    cur = tempFirst;
    halfReversedList = tempSecond;
  }
  return head;
};

let head = linkedList([1, 2, 3, 4]);
console.log(listArray(reorderList(head)));
head = linkedList([1, 2, 3, 4, 5]);
console.log(listArray(reorderList(head)));
