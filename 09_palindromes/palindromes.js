const palindromes = function (string) {
    let num = string.length;
    let lastLetter = string.slice(-1);
    for (let i = 1; i <= num; i++) {

        lastLetter += string.slice(((-i)-1), (-i));

    }
  
    if (string == lastLetter) return true;
    else return false;
  
  
};

// Do not edit below this line
module.exports = palindromes;
