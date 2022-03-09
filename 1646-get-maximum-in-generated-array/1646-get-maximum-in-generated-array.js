/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {

    if (n <= 1) return n;

    const arr = [0, 1];

    for (let i = 2; i <= n; i++) {
        arr.push(i % 2 === 0 ? arr[i / 2] : arr[(i - 1) / 2] + arr[(i - 1) / 2 + 1]);
    }

    return Math.max(...arr);

};