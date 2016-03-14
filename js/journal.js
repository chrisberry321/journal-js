
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
