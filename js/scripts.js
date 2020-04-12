// business logic


var responseSet = [[1, 'Beep!'], [2, 'Boop!'],[3, "Won't you be my neighbor?"]];

var outputArr = []

var numChecker = function(number) {
  if (number === parseInt(number)) {
    outputArr.push(number); 
  } else if (number != parseInt(number)) {
    outputArr.push("Beep, boop, This isn't a number try again")
  }
  }

var output = function(number) {
  for (var i = 0; i < outputArr.length; i++) {
    if (number.toString().includes(3))
    console.log("Yes!")
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
      result = output(re)
    } else {
      result = "Beep, boop, This isn't a number try again"
    }
    
    $('#output').prepend(result);
    $('.well').show();
  });
});
