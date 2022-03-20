/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function (A, B) {
  const numberOfA = new Array(7).fill(0);
  const numberOfB = new Array(7).fill(0);
  const same = new Array(7).fill(0);
  for (let i = 0; i < A.length; i++) {
    numberOfA[A[i]]++;
    numberOfB[B[i]]++;
    if (A[i] == B[i]) same[A[i]]++;
  }
  for (let i = 1; i <= 6; i++) {
    if (numberOfA[i] + numberOfB[i] - same[i] == A.length) {
      return Math.min(numberOfA[i] - same[i], numberOfB[i] - same[i]);
    }
  }
  return -1;
}