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
  let partitionIndex = partition(array, left, right);
  if (partitionIndex === position) {
    return array[partitionIndex];
  } else if (position > partitionIndex) {
    return quickSelect(array, partitionIndex + 1, right, position);
  } else {
    return quickSelect(array, left, partitionIndex - 1, position);
  }
}

var findKthLargest = function (nums, k) {
  nums = nums.sort((a, b) => b - a);
  console.log(nums);
  return nums[k - 1];
};

let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k = 1;
console.log(findKthLargest(nums, k));

(nums = [2, 1]), (k = 1);
console.log(findKthLargest(nums, k));
