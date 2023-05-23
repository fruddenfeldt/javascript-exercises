const palindromes = function (string) {
    let num = string.length;
    let stringLowerCase = string.toLowerCase();
    let reversedWord = '';
    let lastLetter = string.slice(-1);
    for (let i = 1; i <= num; i++) {

        reversedWord = lastLetter += string.slice(((-i)-1), (-i));

    }
    
    let reversedWordLowerCase = reversedWord.toLowerCase();

    reversedStringWithNoSpecialChars = reversedWordLowerCase.replace(/[^a-zA-Z0-9 ]/g, '');
    inputStringWithNoSpecialChars = stringLowerCase.replace(/[^a-zA-Z0-9 ]/g, '');

    reversedStringWithNoSpaces = reversedStringWithNoSpecialChars.replace(/\s+/g, '')
    inputStringWithNoSpaces = inputStringWithNoSpecialChars.replace(/\s+/g, '')

  
    if (reversedStringWithNoSpaces == inputStringWithNoSpaces) return true;
    else return false;
  
  
};

// Do not edit below this line
module.exports = palindromes;
