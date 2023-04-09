const MORSE_CODE_DICT: Record<string, string> = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    ' ': '/'
};

export const morseCodeTranslator = (text: string): string =>
    [...text]
        .map(character => MORSE_CODE_DICT?.[character] ?? '')
        .join(' ');

export const morseCodeToString = (morseCode: string): string => {
    const morseCodeDictArray = Object.entries(MORSE_CODE_DICT).map(([char, code]) => [code, char])
    const morseCodeDict = Object.fromEntries(morseCodeDictArray)

    return morseCode.split(' ')
        .map(code => morseCodeDict?.[code] ?? '')
        .join('');
}