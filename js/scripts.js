// business logic

var response =[[1='Beep!'], [2='Boop!'], [3="won't you be my neighbor?"]]




//UI logic
$(document).ready(function() {
  $("#converter").submit(function(event) {
    event.preventDefault();
    var result = $("#number").val();
    
    
    $('#output').text(result);
    $('.well').show();
  });
});
