module.exports = function generate(isEven) {

  let number;
  if (isEven) {
    number = 0;
  } else {
    number = -1;
  }

  let myIterator = {
    next: function(swap) {
      number += (swap ? 1 : 2);

      // Infinite iterator i.e. never returns done: true
      return {
        value: number
      };
    }
  }

  return myIterator;
}
