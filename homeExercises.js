// SCHEDULE YOUR TECH INTERVIEW AFTER FINISHING THESE EXERCISES

/*
  Yell

  Create a function that expects a string and returns the same but all capital letters

  yell('hello world') -> 'HELLO WORLD'
  yell('keep it quite') -> 'KEEP IT QUIET'
*/

/*
  Max Number

  Create a function that expects an array of numbers and returns the highest value.

  max([4, 3, 1]) -> 4
  max([4, -3, 10]) -> 10

  DO NOT USE Math.max
*/

/*
  Remove numbers

  Create a function that expects a string and returns the same but without any number in it.

  removeNums('Hell1o h0ow are3 you!123') -> 'Hello how are you!'
  removeNums('This looks5 grea8t!') -> 'This looks great'
*/

/*
  Sum all the numbers.

  Create a function that expects an array of numbers and returns the sum.

  sum([1, 2, 4, 5]) -> 12
  sum([1, 10, 4, 5]) -> 20
*/

/*
  Reverse a string.

  Create a function that expects a string and returns the reversed version.

  reverse('hello') -> 'olleh'
*/

/*
  Encrypt your message

  Create a function that expects a message and encrypts it based on our `enigma` dictionary.

  Each character should be changed by the corresponding one in the `enigma` dictionary.

  encrypt('attack') -> 'mhhmfp'
  encrypt('fire in the hole') -> 'nxec xq hwc wodc'
*/

var enigma = {
  a: 'm',
  b: 'a',
  c: 'f',
  d: 'b',
  e: 'c',
  f: 'n',
  g: 'z',
  h: 'w',
  i: 'x',
  j: 'u',
  k: 'p',
  l: 'd',
  m: 'y',
  n: 'q',
  o: 'o',
  p: 'r',
  q: 't',
  r: 'e',
  s: 'v',
  t: 'h',
  u: 'i',
  v: 'j',
  w: 'k',
  x: 'l',
  y: 'g',
  z: 's'
}

/*
  Decrypt the message.

  Create a function that expects a message and decrypts it based on our `enigma` dictionary.

  decrypt('mhhmfp') -> 'attack'
  decrypt('nxec xq hwc wodc') -> 'fire in the hole'

*/

/*
  Decode Colors.

  Create a function that expects an array with colors and returns a resistance.

  - decodeColors('brown black black'); // '10 ohms, 20%'
  - decodeColors('orange orange yellow gold'); // '330k ohms, 5%'
  - decodeColors('red black green gold'); // '2M ohms, 5%'

  This are the rules:
    - First three colors are the amount of Ohms -resistance unit-
    - Fourth color is the tolerance

  Colors dictionary:
    const colors = {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      gray: 8,
      white: 9,
    };

  We use the exponentiation format to represent the resistance:
    - `34 x 10^5` -> 340,000
    - `52 x 10^3` -> 5,200

  The first 2 numbers are to represent the base: `34` and `52` in our examples.
    - `34` would be 'orange yellow'. First color the first number, second second.
    - `52` would be 'gree red'.

  Third color would be exponent of 10.
    - `10^5` would be 'green'
    - `10^3` would be 'orange'

  Back to our resistances:
    - 340,000 would be 'orange yellow green'
    - 5,200 would be 'green red orange'

  Tolerance color:
    - 20% -> NO fourth color
    - 10% -> `silver`
    - 5% -> 'gold'

  More examples;
    - decodeColors('brown black black'); // '10 ohms, 20%'
    - decodeColors('brown black brown gold'); // '100 ohms, 5%'
    - decodeColors('brown black red silver'); // '1k ohms, 10%'
    - decodeColors('red red orange silver'); // '22k ohms, 10%'
    - decodeColors('yellow violet orange gold'); // '47k ohms, 5%'
    - decodeColors('orange orange yellow gold'); // '330k ohms, 5%'
    - decodeColors('red black green gold'); // '2M ohms, 5%'

*/

// SCHEDULE YOUR TECH INTERVIEW AFTER FINISHING THESE EXERCISES
