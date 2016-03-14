var Entry = require('./journal.js').Entry;
var gulp = require('gulp');
var prompt = require('prompt');
prompt.start();

prompt.get('entry', function(err, result) {
  console.log(result.entry);
  var newEntry = new Entry("", result.entry);
  console.log(newEntry.countCharacters());
  });
