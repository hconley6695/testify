function fizz (num) {

  if (num % 5 && num % 3 !== 0) {
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
  
  for (i = start; i <= end; i++) {
  	console.log(fizz(i));
  }

};

export { fizz };
