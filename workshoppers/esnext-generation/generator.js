module.exports = function *generate(isEven) {
  // `yield` either odd or even numbers based on `isEven`
  let number = isEven ? 0 : -1;
  while(true) {
    number += 2;
    yield number;
  }
}
