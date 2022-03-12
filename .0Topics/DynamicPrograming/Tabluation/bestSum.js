function bestSum(targetSum, numbers) {
  let table = new Array(targetSum + 1).fill(0).map(() => null);
  table[0] = [];

  for (let i = 0; i < table.length; i++) {
    for (let num of numbers) {
      if (table[i] !== null && num + i < table.length) {
        if (table[num + i] === null) {
          table[num + i] = [...table[i], num];
          continue;
        } else {
          let currentItem = [...table[num + i], num];
          //   console.log(currentItem);
          if (table[num + i].length > currentItem.length)
            table[num + i] = currentItem;
        }
      }
    }
  }

  return table[targetSum]; 
}

console.log(bestSum(7, [2, 3, 7])); ///true
console.log(bestSum(7, [5, 3, 4, 7])); ///true
console.log(bestSum(7, [2, 4])); ///false
console.log(bestSum(8, [2, 3, 5])); ///true
console.log(bestSum(100, [50, 25, 10, 5])); ///true
