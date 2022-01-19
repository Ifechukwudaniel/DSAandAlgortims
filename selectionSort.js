function selectionSort(array) {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    let min = array[i];
    let position = i;
    for (let j = i; j < length; j++) {
      if (array[j] < min) {
        min = array[j];
        position = j;
      }
    }
    array[position] = array[i];
    array[i] = min;
  }
  return array;
}

console.log(selectionSort([9, 5, 3, 1, 8, 4, 6, 2, 7]));
