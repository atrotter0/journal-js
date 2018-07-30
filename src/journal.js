var vowels = [ "a", "e", "i", "o", "u" ];

export function Entry(title, body) {
  this.title = title;
  this.body = body;
  this.MAX_WORDS_FOR_TEASER = 8;
}

Entry.prototype.countVowels = function() {
  var vowelCounter = 0;
  for (var i = 0; i < this.body.length; i++) {
    if (vowels.includes(this.body[i].toLowerCase())) vowelCounter++;
  }
  return vowelCounter;
};

Entry.prototype.countConsonants = function() {
  var consonantCounter = 0;
  for (var i = 0; i < this.body.length; i++) {
    if (!(vowels.includes(this.body[i].toLowerCase())) && this.body[i] !== " ") consonantCounter++;
  }
  return consonantCounter;
};

Entry.prototype.getTeaser = function() {
  var arrayOfSentences = this.body.split(".");
  var teaser = "";
  var firstSentence = arrayOfSentences[0].split(" ");
  if (firstSentence.length > this.MAX_WORDS_FOR_TEASER) {
    for (var i = 0; i < this.MAX_WORDS_FOR_TEASER; i++) {
      teaser += firstSentence[i] + " ";
    }
  }
  else {
    teaser = firstSentence.join(" ");
  }
  return teaser;
};
