var vowels = [ "a", "e", "i", "o", "u" ];

export function countVowels(text) {
  var counter = 0;
  for (var i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) counter++;
  }
  return counter;
}
