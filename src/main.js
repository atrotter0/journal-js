import { Entry } from './journal';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function displayResults(vowelCount, consonantCount, teaser) {
  $(".results").show();
  $("#vowel-count").text(vowelCount);
  $("#consonant-count").text(consonantCount);
  $("#teaser").text(teaser);
}

$(document).ready(function() {
  $("#submit").submit(function(event) {
    event.preventDefault();

    var entry = new Entry($("#title").val(), $("#body").val());
    displayResults(entry.countVowels(), entry.countConsonants(), entry.getTeaser());
  });
});
