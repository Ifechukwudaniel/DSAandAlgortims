var lengthOfLastWord = function (s) {
  s = s.split(" ");
  s = s.filter((value) => {
    return value.length !== 0;
  });
  return s[s.length - 1].length;
};

let s = "Hello World";
console.log(lengthOfLastWord(s));

s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));

s = "luffy is still joyboy";
console.log(lengthOfLastWord(s));

s = "Today is a nice day";
console.log(lengthOfLastWord(s));
