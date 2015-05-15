$(document).ready(function() {
  eventBindings();
});

function eventBindings(){
      // Run renderStreaks if element id .streak loads
      if ($( '.streak-box' ).length) {
        renderStreaks();
        renderStreaksMarks();
      };

      if ($( '.timestamp' ).length) {
        // Render date field if .timestamp element loads
        $( '.timestamp' ).text(getTimestamp);
        // Run wordCount on textarea
        var $event = $( 'textarea[name="content"]' );
        wordCount($event.val());
        autoSave();
      };

      // Run wordCount as textarea input changes
      $( 'textarea[name="content"]' ).on( "input" , function(){
        var value = $(event.target).val();
        wordCount(value);
      });

      $( "#logout" ).click(function(){
        event.preventDefault();
      });
};

function getFormattedDate() {
    var date = new Date();
    var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return str;
}

function autoSave(){

  window.setInterval(function(){
    saveDocument();
  }, 10000);
};

function saveDocument(){
  var day = window.location.pathname;
  var content = $( 'textarea[name="content"]' ).val();
  var data = {"content": content, "wordcount": $( '#word-count' ).html()};
  $.ajax({
    type: "PUT",
    url: day,
    data: data,
    success: function(){
      $('#auto-save').text("Last autosave: " + getFormattedDate());
    }
  });
};

function renderStreaks(){
  var d = new Date();
  var totalDays = numberOfDays(d.getFullYear(), d.getMonth());
  var glyphiconHTML = '<span class="glyphicon glyphicon-ok"></span>';
  for (var i = 1; i < totalDays; i++) {
    $( '.streak-box' ).append( $( '<div class="streak"></div>' ).attr( 'id', 'day-' + i) );
    // Box should have a glyphicon if that day goal is set to true
  };
}

function renderStreaksMarks(){
  $.ajax({
    type: "GET",
    url: "/streak",
    success: function(data){
      debugger;
      // buildTodoElement(data);
    }
  });
};

function wordCount(value) {
  // Source: http://jsfiddle.net/deepumohanp/jZeKu/
  if (value.length === 0) {
      $( '#word-count' ).html(0);
      return;
  }

  var regex = /\s+/gi;
  var wordCount = value.trim().replace(regex, ' ').split(' ').length;
  var totalChars = value.length;
  var charCount = value.trim().length;
  var charCountNoSpace = value.replace(regex, '').length;

  $( '#word-count' ).html(wordCount);
};

function numberOfDays(year, month){
    var d = new Date(year, month, 0);
    return d.getDate();
};

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
