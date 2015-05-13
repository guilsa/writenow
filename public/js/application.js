$(document).ready(function() {

  if ($('.timestamp').length) {
    $('.timestamp').text(getTimestamp);
  }

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
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
