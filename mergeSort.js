function mergeSort(array = 0) {
  //split array into two
  if (array.length == 1) return array;
  let length = array.length;

  //find middle
  let middle = Math.floor(length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let pl = 0;
  let pr = 0;

  while (left[pl] && right[pr]) {
    if (left[pl] < right[pr]) {
      result.push(left[pl]);
      pl++;
    } else {
      result.push(right[pr]);
      pr++;
    }
  }

  result = result.concat(left.slice(pl)).concat(right.slice(pr));
  console.log(result);
  return result;
}

let array = [1, 9, 2, 8, 3, 7, 4, 6, 5, 10];
console.log(mergeSort(array));
