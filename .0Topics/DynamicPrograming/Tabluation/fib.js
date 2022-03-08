var fib = function (n) {
  let array = new Array(n + 1).fill(0);
  array[1] = 1;

  for (let i = 0; i < n; i++) {
    array[i + 1] += array[i];
    array[i + 2] += array[i];
  }

  return array[n];
};

console.log(fib(2));
console.log(fib(50));
console.log(fib(100));
