var removeElement = function (array, val) {
  let k = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== val) {
      array[k] = array[i];
      k++;
    }
  }
  return k;
};

let nums = [3, 2, 2, 3];
val = 3;
console.log(removeElement(nums, val));

nums = [0, 1, 2, 2, 3, 0, 4, 2];
val = 2;
console.log(removeElement(nums, val));

nums = [12, 2, 3, 4, 5, 6, 3, 3, 3];
val = 3;
console.log(removeElement(nums, val));

nums = [1];
val = 1;
console.log(removeElement(nums, val));

nums = [3, 3];
val = 5;
console.log(removeElement(nums, val));

nums = [2];
val = 5;
console.log(removeElement(nums, val));
