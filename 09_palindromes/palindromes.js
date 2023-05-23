const palindromes = function (string) {
    let num = string.length;
    let stringLowerCase = string.toLowerCase();
    let reversedWord = '';
    let lastLetter = string.slice(-1);
    for (let i = 1; i <= num; i++) {

        reversedWord = lastLetter += string.slice(((-i)-1), (-i));

    }
    
    let reversedWordLowerCase = reversedWord.toLowerCase();

    reversedStringWithNoSpaces = reversedWordLowerCase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    inputStringWithNoSpaces = stringLowerCase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  
    if (reversedStringWithNoSpaces == inputStringWithNoSpaces) return true;
    else return false;
  
  
};

// Do not edit below this line
module.exports = palindromes;
