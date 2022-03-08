function bestSum(targetSum, numbers, memo = new Map()) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortCom = null;
  for (let num of numbers) {
    let remainder = targetSum - num;
    let currentCom = bestSum(remainder, numbers, memo);
    if (currentCom !== null) {
      currentCom.push(num);
      if (shortCom === null || currentCom.length < shortCom.length)
        shortCom = currentCom;
    }
  }
  memo.set(targetSum, shortCom);
  return shortCom;
}

console.log(bestSum(7, [2, 3, 7])); ///true
console.log(bestSum(7, [5, 3, 4, 7])); ///true
console.log(bestSum(7, [2, 4])); ///false
console.log(bestSum(8, [2, 3, 5])); ///true
console.log(bestSum(100, [25, 10, 5])); ///true

// canConstruct;
