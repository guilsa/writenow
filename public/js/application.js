$(document).ready(function() {

  if ($('.timestamp').length) {
    $('.timestamp').text(getTimestamp);
  }

  $("textarea").on("input", function(){
    wordCount(event);
  })

  $("#logout").click(function(event){
    event.preventDefault();
  });

});

function getTimestamp() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var weekday = days[d.getDay()];
  var day = d.getDate();
  var months = ["January","February","March","April","May","June","July",
                "August", "September","October","November","December"];
  var month = months[d.getMonth()];
  var year = d.getFullYear();
  return weekday + ", " + month + " " + day + ", " + year;
}

// Source: http://jsfiddle.net/deepumohanp/jZeKu/
function wordCount(event) {
    var value = $(event.target).val();

    if (value.length == 0) {
        $('#wordCount').html(0);
        return;
    }

    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    var totalChars = value.length;
    var charCount = value.trim().length;
    var charCountNoSpace = value.replace(regex, '').length;

    $('#wordCount').html(wordCount);
};
