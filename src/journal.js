var vowels = [ "a", "e", "i", "o", "u" ];

export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.countVowels = function() {
  var vowelCounter = 0;
  for (var i = 0; i < this.body.length; i++) {
    if (vowels.includes(this.body[i])) vowelCounter++;
  }
  return vowelCounter;
}

Entry.prototype.countConsonants = function() {
  var consonantCounter = 0;
  for (var i = 0; i < this.body.length; i++) {
    if (!(vowels.includes(this.body[i])) && this.body[i] !== " ") consonantCounter++;
  }
  return consonantCounter;
}
