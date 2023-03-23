## Morse code translator
![alt_text](images/js.png "image_tooltip")

Write a function that takes a string of text as input and returns the Morse code equivalent of the input text. The Morse code translation should use a space character between each letter and a slash character ("/") between each word.
Here's the Morse code chart for reference:


```text
A .-    N -.    0 -----
B -...  O ---   1 .----
C -.-.  P .--.  2 ..---
D -..   Q --.-  3 ...--
E .     R .-.   4 ....-
F ..-.  S ...   5 .....
G --.   T -     6 -....
H ....  U ..-   7 --...
I ..    V ...-  8 ---..
J .---  W .--   9 ----.
K -.-   X -..-
L .-..  Y -.-- 
M --    Z --..
```

For example, given the input string "SOS", the function should return the string `... --- ...`. Given the input string "HELLO WORLD", the function should return the string `.... . .-.. .-.. --- / .-- --- .-. .-.. -..`
To complete this task, you'll need to use a mapping between the letters and their Morse code equivalents, as well as a loop to iterate over each character in the input string and convert it to its Morse code equivalent.
Here are some unit tests:

```ts
describe('morseCodeTranslator', () => {
  it('should return the Morse code equivalent of a single letter', () => {
    expect(morseCodeTranslator('a')).toBe('.-');
    expect(morseCodeTranslator('b')).toBe('-...');
    expect(morseCodeTranslator('c')).toBe('-.-.');
  });
  
  it('should return the Morse code equivalent of a word', () => {
    expect(morseCodeTranslator('hello')).toBe('.... . .-.. .-.. ---');
    expect(morseCodeTranslator('world')).toBe('.-- --- .-. .-.. -..');
  });
  
  it('should include a space character between each letter', () => {
    expect(morseCodeTranslator('sos')).toBe('... --- ...');
    expect(morseCodeTranslator('help')).toBe('.... . .-.. .--.');
  });
  
  it('should include a slash character between each word', () => {
    expect(morseCodeTranslator('sos please')).toBe('... --- ... / .--. .-.. . ... .');
    expect(morseCodeTranslator('mayday mayday')).toBe('-- .- -.-- -.. .- -.-- / -- .- -.-- -.. .- -.--');
  });
});
```
