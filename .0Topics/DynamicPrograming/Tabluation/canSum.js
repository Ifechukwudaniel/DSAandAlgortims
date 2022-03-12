function canSum(target, numbers) {
  let array = new Array(target + 1).fill(0).map(() => false);
  array[0] = true;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      for (let num of numbers) {
        if (array[i + num] !== undefined) array[i + num] = true;
        // console.log(i + num);
      }
    }
  }
  console.log(array);
  return array[target];
}

console.log(canSum(6, [2, 3])); ///true
console.log(canSum(7, [5, 3, 4, 7])); ///true
console.log(canSum(7, [2, 4])); ///false
console.log(canSum(8, [2, 3, 5])); ///true
console.log(canSum(300, [7, 13])); ///true
