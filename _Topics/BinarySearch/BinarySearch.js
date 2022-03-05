function binarySearch(values, target) {
  let left = 0;
  let right = values.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let found = values[mid];

    if (found === target) return mid;
    if (found > target) right = mid - 1;
    if (found < target) left = mid + 1;
  }
  return -1;
}

console.log(binarySearch([1, 2, 5, 5, 6, 7, 8, 9], 7));
