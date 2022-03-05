var maximumTime = function (time) {
  time = time.split("");
  if (time[0] === "?") {
    if (time[1] === "?" || parseInt(time[1]) <= 3) {
      time[0] = "2";
      time[1] = "3";
    } else time[0] = "1";
  }

  if (time[1] === "?") {
    if (parseInt(time[0]) < 2) time[1] = "9";
    else time[1] = "3";
  }

  if (time[3] === "?") time[3] = "5";

  if (time[4] === "?") time[4] = "9";

  return time.join("");
};

let time = "??:2?";
console.log(maximumTime(time));
