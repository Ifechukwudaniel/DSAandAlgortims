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

console.log(listArray(linkedList([1, 2, 3, 4, 5]), 2));
console.log(listArray(linkedList([1]), 2));
console.log(listArray(linkedList([1, 2]), 1));
