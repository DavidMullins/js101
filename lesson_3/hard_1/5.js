function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  
  if (dotSeparatedWords.length !== 4) {
    return false;
  } else {
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return false;
      }
    }
    return true;
  }
}