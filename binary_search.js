/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function (array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess;

  while (max >= min) {
    guess = Math.floor((min + max) / 2);
    if (array[guess] === targetValue) {
      console.log(guess);
      return guess;
    } else if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  console.log("nope");
  return -1;
};

doSearch([1, 3, 5, 7, 9, 11, 13, 15], 7);

doSearch( [20,30,40,50,60,70,80,90] ,20);
