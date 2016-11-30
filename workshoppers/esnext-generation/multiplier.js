module.exports = function *multiplier() {
  let number = 0;
  let multiplier = 1;
  while(true) {
    number++;
    multiplier = yield multiplier * number;

    if(!multiplier) {
      multiplier = 1;
    }
  }

}
