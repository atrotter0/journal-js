import { Entry } from './journal';
import './styles.css';

$(document).ready(function() {
  $("#submit").submit(function(event) {
    event.preventDefault();
    var entry = new Entry($("#title").val(), $("#body").val());
    console.log(entry.countVowels());
    console.log(entry.countConsonants());
  });
});
