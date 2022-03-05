let maxContainer = (array) => {
  let maxCon = 0;
  let a = 0;
  let b = array.length - 1;

  while (a < b) {
    let width = b - a;
    let height = Math.min(array[a], array[b]);
    maxCon = Math.max(maxCon, height * width);
    console.log({ width, height, maxCon });
    if (array[a] > array[b]) b--;
    else a++;
  }
  return maxCon;
};

console.log(maxContainer([4, 8, 1, 2, 3, 9]));
