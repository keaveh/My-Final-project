$(document).ready(function () {
  var humanScores = new Array();
  var botScores = new Array();
  var humanScore = 0;
  var botScore = 0;

  $("button").click(function () {
    //set the user choice based on the button
    var userChoice = $(this).attr("id");

    //adds some color changing so people can see what they chose
    $("#" + userChoice).addClass("clicked");
    $("#" + userChoice).mouseleave(function () {
      $(this).removeClass("clicked");
    });

    // set the botchoice to a valued based on a math rand
    var botChoice = "rock";
    var botGenerator = Math.floor(Math.random() * 3) + 1;
    switch (botGenerator) {
      case 1:
        var botChoice = "rock";
        break;
      case 2:
        var botChoice = "paper";
        break;
      case 3:
        var botChoice = "scissors";
        break;
    }

    $("#popup").fadeIn("slow");
    $("#popup").html("Computer chose " + botChoice + " !");
    $("#popup").click(function () {
      $("#popup").fadeOut("slow");
    });

    //check that both variables returned
    console.log(userChoice);
    console.log(botChoice);

    // compare the options
    // set the score variables equal to variables
    var botWin = 0;
    var humanWin = 0;

    if (userChoice === "rock") {
      if (botChoice === "rock") {
        $("#tie").fadeIn(2000).fadeOut("slow");
        botWin = 0;
        humanWin = 0;
      } else if (botChoice === "paper") {
        botWin = 1;
        humanWin = 0;
      } else {
        botWin = 0;
        humanWin = 1;
      }
    } else if (userChoice === "paper") {
      if (botChoice === "paper") {
        $("#tie").fadeIn(2000).fadeOut("slow");
        botWin = 0;
        humanWin = 0;
      } else if (botChoice === "scissors") {
        botWin = 1;
        humanWin = 0;
      } else {
        botWin = 0;
        humanWin = 1;
      }
    } else {
      if (botChoice === "scissors") {
        $("#tie").fadeIn(2000).fadeOut("slow");
        botWin = 0;
        humanWin = 0;
      } else if (botChoice === "rock") {
        botWin = 1;
        humanWin = 0;
      } else {
        botWin = 0;
        humanWin = 1;
      }
    }

    // keeping score score
    console.log(botWin);
    console.log(humanWin);

    //adding scores to an array
    var addScores = function (botWin, humanWin) {
      botScores.push(botWin);
      humanScores.push(humanWin);
    };

    addScores(botWin, humanWin);

    console.log(botScores);
    console.log(humanScores);

    console.log(botScore);
    console.log(humanScore);

    //adds new scores to array, think I could have done this in a much
    //simpler way using an array function
    var sumScore = function (array1, array2) {
      for (var i = botScores.length - 1; i < botScores.length; i++) {
        var botPoint = botScores[i];
        var humanPoint = humanScores[i];
        botScore = botScore + botPoint;
        humanScore = humanScore + humanPoint;
      }
    };

    sumScore();

    console.log(botScore);
    console.log(humanScore);

    $("#humanScore").each(function () {
      $(this).html(humanScore);
    });
    $("#computerScore").each(function () {
      $(this).html(botScore);
    });

    var highlightWinner = function (botScore, humanScore) {
      if (botScore > humanScore) {
        $("#status").html("The computer is winning!");
        $("#computerScore").addClass("highlight");
        $("#humanScore").removeClass("highlight");
      } else if (botScore < humanScore) {
        $("#status").html("Congrats you are winning!");
        $("#humanScore").addClass("highlight");
        $("#computerScore").removeClass("highlight");
      } else {
        $("#status").html("You are tied!");
        $("#humanScore").removeClass("highlight");
        $("#computerScore").removeClass("highlight");
      }
    };

    highlightWinner(botScore, humanScore);
  });
});
