var factorial = function(number) {
  if (number > 0) {

     var result = number * factorial(number - 1)

  }
  else {
    return 1;
  }

  return result;



};

module.exports = factorial;
