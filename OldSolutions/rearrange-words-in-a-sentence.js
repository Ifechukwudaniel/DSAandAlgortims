function sort(array, left, right) {}

var arrangeWords = function (text) {
  let stringArray = text.split(" ");
  stringArray[0] = stringArray[0].toLowerCase();
  sort(stringArray, 0, stringArray.length - 1);
  // stringArray[0] =
  //   stringArray[0].charAt(0).toUpperCase() + stringArray[0].slice(1);
  // text = stringArray.join(" ");
  // return text;
};

let text = "Leetcode is cool";
console.log(arrangeWords(text));

text = "Keep calm and code on";
console.log(arrangeWords(text));
