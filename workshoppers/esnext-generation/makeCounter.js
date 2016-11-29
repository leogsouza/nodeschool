module.exports = function makeCounter(someObj) {
  var num = 0;
  var done = false;
  someObj.next = function() {
    // complete me
    if (num < 10) {
      num++;
    } else {
      done = true;
    }

    return {
      done: done,
      value: num
    };
  }

}
