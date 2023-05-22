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

// Copy pasted from the web:

//const multiply = function (array) {
 // return array.length
  //  ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
  //  : 0;
//};


//const multiply = function(...args){
//  return args.reduce((acc, cur) => acc * cur);
// }

// my own version with a loop:

const multiply = function(...args){
 let sum = 1
for (let i = 0; i < args.length; i++) {
   sum *= args[i]
  }
  console.log(sum)
  return sum
}



const power = function(x, y) {
	return Math.pow(x, y)
};

const factorial = function(x) {
  let sum = 1;
  for (let i = 1; i<=x; i++) {
    sum *= i;
  }
  return sum;
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
