function partition(array, left, right) {
  let pivot = array[right];
  let i = left;
  for (let j = i; j < right; j++) {
    if (array[j] < pivot) {
      swap(array, i, j);
      i++;
    }
  }
  swap(array, i, right);
  return i;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function quickSelect(array, left, right, position) {
  if (left < right) {
    let partitionIndex = partition(array, left, right);
    if (partitionIndex === position) return array[partitionIndex];
    else if (position > partitionIndex)
      return quickSelect(array, left, partitionIndex - 1, position);
    else return quickSelect(array, partitionIndex - 1, right, position);
  }
}

let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k = 4;

console.log(quickSelect(nums, 0, nums.length - 1, k));
