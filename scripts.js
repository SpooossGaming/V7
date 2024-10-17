/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

console.assert(longest("hello my guy") === "hello", "longest: skilar 'hello' fyrir 'hello my guy");
console.assert(longest("a b") === "a", "ef strengir eru jafnlangir þá velur longest fyrsta streng");
console.assert(longest("") === "", "ef tómt þá skilar tómt");

console.assert(shortest("ganana sohs ahs") === "ahs", "skilar stysta streng");
console.assert(shortest("a b") === "a", "skilar fyrsta ef allt er jafn langt");
console.assert(shortest("") === "", "ef tómt þá skilar tómt");

console.assert(reverse("banana") === "ananab", "snýr streng við");
console.assert(reverse("why so serious") === "suoires os yhw", "snýr strengjum við");

console.assert(palindrome("bababa") === false, "reverse: skilar false fyrir 'bababa'");
console.assert(palindrome("allir grilla") === true, "reverse: skilar true fyrir 'allir grilla' þrátt fyrir bilið");

console.assert(vowels("unga bunga") === 4, 'skilar fjölda samhljóða');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  // Útfæra

  if (!isString(str)) return '';
  const words = split(str);
  return words.reduce((longest, current) => current.length > longest.length ? current : longest, '');
}

function shortest(str) {
  // Útfæra
  if (!isString(str)) return '';
  const words = split(str);
  return words.reduce((shortest, current) => current.length < shortest.length ? current : shortest, words[0] || '');
}

function reverse(str) {
  // Útfæra
  if (!isString(str)) return '';
  return str.split('').reverse().join('');
}

function palindrome(str) {
  // Útfæra
  if (!isString(str)) return false;
  const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

function vowels(str) {
  // Útfæra
  if (!isString(str)) return 0;
  return str.split('').filter(char => VOWELS.includes(char)).length;
}

function consonants(str) {
  // Útfæra
  if (!isString(str)) return0;
  return str.split('').filter(char => CONSONANTS.includes(char)).length;
}

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  // Útfæra
}
