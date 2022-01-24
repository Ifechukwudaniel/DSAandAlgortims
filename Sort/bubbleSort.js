function bubbleSort(array) {
  let i = 0,
    j = 0;
  let temp = null;

  while (array[i]) {
    if (j >= array.length) {
      j = 0;
      i++;
    }
    if (array[j] > array[j + 1]) {
      temp = array[j + 1];
      array[j + 1] = array[j];
      array[j] = temp;
      j++;
    } else j++;
  }

  return array;
}

console.log(bubbleSort([9, 5, 3, 1, 8, 4, 6, 2, 7]));

function bubbleSortRecursively(array, length = array.length - 1) {
  if (length === 0) return array;
  let j = 0;
  while (array[j]) {
    if (array[j] > array[j + 1]) {
      temp = array[j + 1];
      array[j + 1] = array[j];
      array[j] = temp;
      j++;
    } else j++;
  }
  return bubbleSortRecursively(array, --length);
}

console.log(bubbleSortRecursively([9, 5, 3, 1, 8, 4, 6, 2, 7]));

Algorithms;
