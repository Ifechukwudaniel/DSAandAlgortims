const generate2dMatrix = (length, itemLength) => {
  let array = [];
  let n = 0;

  for (let i = 0; i < length; i++) {
    let arr = [];
    for (let j = 0; j < itemLength; j++) {
      arr[j] = j + 1 + n;
    }
    n = arr[itemLength - 1];
    array[i] = arr;
  }
  return array;
};

let matrix = generate2dMatrix(4, 5);

function traversalSequential(matrix) {
  let values = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      values.push(matrix[row][col]);
    }
  }
  return values;
}

console.log(traversalSequential(matrix));
