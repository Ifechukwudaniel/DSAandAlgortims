/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
   let stack = [];
  let str = s.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ")" && stack.length == 0) {
      str[i] = "";
    }
    if (str[i] == ")" && stack.length !== 0) stack.pop();
    if (str[i] == "(") stack.push(i);
  }

  while (stack.length) {
    const indexToPop = stack.pop();
    str[indexToPop] = "";
  }

  return str.join("");  
};