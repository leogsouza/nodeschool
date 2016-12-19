function countWords(inputWords) {

  return inputWords.reduce(function(allWords, word) {
    if (word in allWords) {
      allWords[word]++;
    } else {
      allWords[word] = 1;
    }
    return allWords;
  }, {});
}

module.exports = countWords;
