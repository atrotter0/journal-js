import { Entry } from './journal';
import './styles.css';

function displayResults(vowelCount, consenantCount) {
  $(".results").show();
  $("#vowel-count").text(vowelCount);
  $("#consenant-count").text(consenantCount);
}

$(document).ready(function() {
  $("#submit").submit(function(event) {
    event.preventDefault();

    var entry = new Entry($("#title").val(), $("#body").val());
    displayResults(entry.countVowels(), entry.countConsonants());
  });
});
