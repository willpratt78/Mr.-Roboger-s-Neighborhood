// business logic

var responseSet = [[1, 'Beep!'], [2, 'Boop!'],[3, "Won't you be my neighbor?"]];

var numChecker = function(number) {
  if (number === parseInt(number)) {
    return true; 
  } else {
    return false;
  }
}

var response = function(number) {
  for (var i =0; i < responseSet.length; i++) {
    if (number == responseSet[i][0]) {
    return responseSet[i][1];
    }else if (number >= 4){
    return number;
    }
  }
}

//UI logic
$(document).ready(function() {
  $("#converter").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#number").val());

    if (numChecker(userInput) === true){
      result = response(userInput)
    } else {
      result = "Beep, boop, This isn't a number try again"
    }
    
    $('#output').text(result);
    $('.well').show();
  });
});
