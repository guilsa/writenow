$(document).ready(function() {

  eventBindings();

});


function eventBindings(){

  // Run renderStreaks if element id .streak loads
  $( '.streak-box' ).load(function(){
    renderStreaks();
    addStreaks();
  });

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

function autoSave(){
  window.setInterval(function(){
    saveWordCount();
    saveDocument();
  }, 10000);
};

function saveWordCount(){
  var count = $( '#wordCount' ).html();
  $.ajax({
    type: "PUT",
    url: "/wordcount",
    success: function(){
      debugger;
    }
  });
};

}

function addStreaks(){
  $.ajax({
    type: "GET",
    url: "/streak",
    success: function(data){
      debugger;
      // buildTodoElement(data);
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

function numberOfDays(year, month) {
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

// Source: http://jsfiddle.net/deepumohanp/jZeKu/
function wordCount(value) {
    if (value.length === 0) {
        $( '#wordCount' ).html(0);
        return;
    }

    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    var totalChars = value.length;
    var charCount = value.trim().length;
    var charCountNoSpace = value.replace(regex, '').length;

    $( '#wordCount' ).html(wordCount);
};
