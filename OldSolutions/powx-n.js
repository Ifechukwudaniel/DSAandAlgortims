var myPow = function (x, n) {
  for (let i = 1; i <= n; i++) {
    console.log(x, i);
    x *= i;
  }
  return x;
};

let x = 2.1,
  n = 3;
console.log(myPow(x, n));
