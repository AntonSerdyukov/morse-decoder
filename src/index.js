const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    ' ': '**********'
};


function decode(expr) {
    

    let NEWMORSE_TABLE = {};
    for (let key of Object.keys(MORSE_TABLE)) {
        NEWMORSE_TABLE[getNewKey(key)] = MORSE_TABLE[key];
    }

    let res = '';
    for (let i = 0; i < expr.length; i += 10) {
        if (expr[i] === "*") {
            res += " ";
            continue;
        }

        res += NEWMORSE_TABLE[getSymbolCode(expr, i)];
    }

    return res;

}

function getSymbolCode(expr, i) {

    let symbolCode = '';
    for (let j = i; j < i + 10; j++) {
        symbolCode += expr[j];
    }
    return symbolCode;
}

function getNewKey(key) {
   // if (key === ' ') return key;
    let newKey = '';
    let newKeyLength = key.length * 2;
    while (newKeyLength < 10) {
        newKey += '0';
        newKeyLength++;
    }

    for (let i = 0; i < key.length; i++) {
        if (key[i] === '.') {
            newKey += "10";
        }
        else if (key[i] === '-') {
            newKey += "11";
        }
    }

    return newKey;

}

module.exports = {
    decode
}
