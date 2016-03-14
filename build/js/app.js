(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

exports.Entry = function(title, content) {
  this.title = title;
  this.content = content;
  // this.wordCount = [];
}

exports.Entry.prototype.journalEntry = function() {
  return this.title + " " + this.content;
}

exports.Entry.prototype.countCharacters = function() {
  return this.content.length;
}

},{}],2:[function(require,module,exports){
var Entry = require('./journal.js').Entry;

$(document).ready(function() {
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var content = $('#content').val();
    var newJournal = new Entry(title, content);

    debugger;

    var wordCount = content.length;
    $('#newjournal').append('<article><h2>' + title + '</h2><p>' + content + '</p><p>' + wordCount + ' letters</p></article>');
  });
});

},{"./journal.js":1}]},{},[2]);
