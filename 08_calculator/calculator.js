const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

// try array.reduce() method:


const sum = function(array) {
  
  let theSum = 0;
  
  let maxIndex = array.length - 1;
  
  for (let i = 0; i < 
  array.length; i++) 
  {
  theSum += array[i] 
  }
  
  console.log(theSum)
  return theSum;
};

// Need to handle multiple numbers, maybe with ...operator:
// and it does't even work with two numbers for some reason.

const multiply = function(x, y) {
  return (x*y)
};

const power = function(x, y) {
	return Math.pow(x, y)
};

const factorial = function(x, y) {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
