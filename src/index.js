const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let mainArray = [];
  let lettersArray = [];
  let resMorseArray = [];
  let resLetters = [];
  let finalArray = '';
  
  for (i = 0; i < expr.length; i += 10) {
    mainArray.push(expr.slice(i, i + 10));
  }
  resMorseArray = mainArray.map(el => morse(el));
  
  for (key in resMorseArray) 
    if (MORSE_TABLE.hasOwnProperty(resMorseArray[key])) {
      finalArray = finalArray + MORSE_TABLE[resMorseArray[key]];
    } else {
      finalArray = finalArray + ' ';
    }
    function morse(string) {
  let morseArray = [];
  let letter = '';
  
  for (i = 0; i < 10; i += 2) {
    morseArray.push(string.slice(i, i + 2))
  }
  for (j = 0; j < 5; j += 1) {
    if (morseArray[j] == '00') {
      morseArray[j] = '';
    } else if (morseArray[j] == '10') {
      morseArray[j] = '.';
    } else if (morseArray[j] == '11') {
      morseArray[j] = '-';
    }
  }
  letter = morseArray.join('');
  return letter;
}
  return finalArray;
  }

module.exports = {
    decode
}