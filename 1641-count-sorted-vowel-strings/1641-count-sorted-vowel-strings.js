/**
 * @param {number} n
 * @return {number}
 */
function countVowelStrings(n){
return countstrings(n, 0);
};

function countstrings(n, start){
if (n == 0) {
return 1;
}
let cnt = 0;
for (let i = start; i < 5; i++)
{
// console.log(countstrings(n - 1, i));
cnt += countstrings(n - 1, i);
}
return cnt;
}