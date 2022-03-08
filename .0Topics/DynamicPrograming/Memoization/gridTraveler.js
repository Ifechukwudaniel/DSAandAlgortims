var gridTraveler = function (m, n, memo = {}) {
  let key = m + "," + n;
  let reverseKey = n + "," + m;
  // check memo for current value
  if (key in memo) return memo[key];
  if (reverseKey in memo) return memo[reverseKey];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveler(3, 3));
