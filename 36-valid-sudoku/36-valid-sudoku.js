/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
     const seen = new Set()
  // Nested loops for the size of the set
  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      let char = board[i][j]
      //Check if the char is not zero
      if(char== "." || char==',' )  continue
      if (parseInt(char)!= NaN) {
        // If the char has already occured return false
        if (
          seen.has(`${char} in row ${i}`) ||
          seen.has(`${char} in col ${j}`) ||
          seen.has(`${char} in block ${Math.floor(i / 3)} - ${Math.floor(j / 3)}`)
        ) {
            console.log(seen)
          return false
        }
        // Else add the character in the row,column and block
        seen.add(`${char} in row ${i}`)
        seen.add(`${char} in col ${j}`)
        seen.add(`${char} in block ${Math.floor(i / 3)} - ${Math.floor(j / 3)}`)
      }
    }
  }
  return true
};