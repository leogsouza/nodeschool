module.exports = function makeCounter(someObj, maxNum = 10) {
  var num = 0;
  var done = false;
  someObj.next = function() {
    // complete me
    if (num < maxNum) {
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
