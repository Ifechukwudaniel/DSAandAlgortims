var plusOne = function (digits) {
  let length = digits.length;

  if (digits[length - 1] === 9) {
    let i = length - 1;
    let carry = 0;
    digits[i] = digits[i] + 1;
    while (i >= 0) {
      digits[i] = digits[i] + carry;
      if (digits[i] > 9) {
        digits[i] = 0;
        carry = 1;
      } else {
        carry = 0;
      }
      i--;
    }
    if (carry) digits.unshift(carry);
  } else {
    digits[length - 1] = digits[length - 1] + 1;
  }
  return digits;
};

let digits = [1, 2, 3];
console.log(plusOne(digits));

digits = [4, 3, 2, 1];
console.log(plusOne(digits));

digits = [9, 9, 9];
console.log(plusOne(digits));
