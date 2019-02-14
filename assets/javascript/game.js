$(document).ready(function () {

  var targetNum = 0;
  var blueGem = 0;
  var greenGem = 0;
  var purpleGem = 0;
  var redGem = 0;
  var wins = 0;
  var losses = 0;
  var score = 0;

  function randomNum() {
    var randomNum = Math.floor(Math.random() * 12) + 1;

    return randomNum

  }


  function initialize() {
   
    score = 0;
    blueGem = randomNum();
    greenGem = randomNum();
    purpleGem = randomNum();
    redGem = randomNum();
    targetNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    $(".targetNum").text(targetNum);
    $(".totalScore").text(score);

    // console.log(blueGem);
    // console.log(greenGem);
    // console.log(purpleGem);
    // console.log(redGem);
  }

  initialize();

  $("#blueGem").on("click", function () {
    // alert("blue gem was clicked", blueGem);
    console.log("blue = ",blueGem);
    score += blueGem;
    console.log("score = ",score);
    
  });

  $("#greenGem").on("click", function () {
    // alert("green gem was clicked",greenGem);
    console.log("green = ", greenGem);
    score += greenGem;
    console.log("score = ",score);
  });

  $("#purpleGem").on("click", function () {
    // alert("green gem was clicked", purpleGem);
    console.log("purple = ",purpleGem);
    score += purpleGem;
  });

  $("#redGem").on("click", function () {
    // alert("red gem was clicked",redGem);
    console.log("red = ",redGem);
    score += redGem;
  });

// update and logic 

  $(".gem").on("click", function () {
    $(".totalScore").text(score);

    if (score > targetNum){

      alert("You lose.");
      losses+=1;
      $(".losses").text(losses);
      initialize();

    }

    if (score == targetNum){
      alert("You win!");
      wins += 1;
      $(".wins").text(wins);
      initialize();
    }

  });
});