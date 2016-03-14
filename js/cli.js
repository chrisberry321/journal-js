var Entry = require('./journal.js').Entry;
var gulp = require('gulp');

var userJournal = prompt('What would you like to add to your journal entry?');
var result =Entry(userJournal);
console.log('userJournal');
