function fizz (num) {
  // TODO
  if (num % 15 !== 0) {
  	return num;
  } else if (num % 15 === 0) {
  	return "FizzBuzz";
  } else if (num % 5 === 0) {
  	return "Buzz";
  } else {
  	return "Fizz";
  }
};

function fizzBuzz (start, end) {
  // Write fizzBuzz here once fizz is finished.
};

export { fizz };
