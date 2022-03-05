const getBallBox = (number) => {
  let ballNumber = 0;
  number = String(number);
  number = number.split("");
  for (let i = 0; i < number.length; i++) {
    ballNumber += parseInt(number[i]);
  }
  return ballNumber;
};

var countBalls = function (lowLimit, highLimit) {
  let allBalls = [];
  let maxBalls = 0;
  let ballsHash = {};

  for (let i = lowLimit; i <= highLimit; i++) {
    let ballBox = getBallBox(i);
    allBalls.push(ballBox);
  }

  for (let i = 0; i < allBalls.length; i++) {
    if (ballsHash[`${allBalls[i]}`]) {
      ballsHash[`${allBalls[i]}`] += 1;
      maxBalls = Math.max(ballsHash[`${allBalls[i]}`], maxBalls);
    } else {
      ballsHash[`${allBalls[i]}`] = 1;
      maxBalls = Math.max(ballsHash[`${allBalls[i]}`], maxBalls);
    }
  }

  return maxBalls;
};
let lowLimit = 1,
  highLimit = 10;
console.log(countBalls(lowLimit, highLimit));

(lowLimit = 5), (highLimit = 15);
console.log(countBalls(lowLimit, highLimit));

(lowLimit = 1), (highLimit = 28);
console.log(countBalls(lowLimit, highLimit));
