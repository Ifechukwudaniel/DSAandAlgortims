/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const amountOfZ = Math.floor((k - n) / (alphabet.length - 1));
    const remainingAmount = n - amountOfZ;
    const remainingSum = k - amountOfZ * alphabet.length;
    const lastLetter = alphabet[remainingSum - remainingAmount];
    let result = "z".repeat(amountOfZ);
    if (amountOfZ < n) {
        result = lastLetter + result;
    }
    return "a".repeat(Math.max(remainingAmount - 1, 0)) + result;
};