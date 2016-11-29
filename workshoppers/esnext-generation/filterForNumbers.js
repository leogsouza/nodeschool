module.exports = function filterForNumbers(iterable) {
  // loop over iterable, adding numeric values to a new array
  // then return the new array of numbers
  const arrNumbers = [];
  
  for (let item of iterable) {
    if(typeof item === 'number')
      arrNumbers.push(item);
  }
  return arrNumbers;
}
