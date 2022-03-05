var partitionFunction = function (array, left, right) {
  let pivot = array[right];
  let pIndex = left;
  for (let j = left; j < right; j++) {
    if (array[j] < pivot) {
      swap(array, pIndex, j);
      pIndex++;
    }
  }
  swap(array, pIndex, right);
  return pIndex;
};

function quickSort(array, left, right) {
  if (left < right) {
    let partitionIndex = partitionFunction(array, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

let nums = [1, 10, 9, 2, 8, 3, 7, 4, 6, 5];
quickSort(nums, 0, nums.length - 1);
console.log(nums);
