function Entry (title, content) {
  this.title = title;
  this.content = content;
  this.wordCount = [];
}

Entry.prototype.journalEntry = function() {
  return this.title + " " + this.content;
}

Entry.prototype.countCharacters = function() {
  return this.content.length;
}

$(document).ready(function() {
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var content = $('#content').val();
    var newJournal = new Entry(title, content);
    $('#newjournal').append('<article><h2>' + title + '</h2><p>' + content + '</p></article>');
  });
});
//
