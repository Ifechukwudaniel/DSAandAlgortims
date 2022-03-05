var letterCombinations = function (digits) {
  let keys = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  for (let i = 0; i < digits.length; i++) {
    console.log(keys[digits[i]]);
  }
};

letterCombinations("2");
// letterCombinations("23737");
