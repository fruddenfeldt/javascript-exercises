// Pseudocode:
// Create a for loop 
// With "if" statement to check for equality, like 3+5 == 8


const fibonacci = function fibo(num){
    var a = 1, b = 0, temp;

    if (num <0) {return 'OOPS'}

    else
  
    while (num >= 1){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }
  
  // fibonacci(6) // returns 13
  
// Do not edit below this line
module.exports = fibonacci;
