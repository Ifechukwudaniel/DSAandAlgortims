/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let stack = [];
  for (let i = 0; i < num.length; i++) {
    while (k > 0 && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }
  if (k > 0) {
    stack = stack.slice(0, stack.length - k);
  }

  if (stack.length === 0) return "0";

  return String(BigInt(stack.join("")));
};
