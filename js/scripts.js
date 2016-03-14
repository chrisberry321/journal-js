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
