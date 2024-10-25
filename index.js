var playAgain = document.getElementById("play-again");

playAgain.addEventListener("click", function () {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImg1 = "images/dice" + randomNumber1 + ".png";
  document.querySelector(".img1").setAttribute("src", randomDiceImg1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", randomDiceImg2);
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h3").innerHTML = "Player 1 Wins";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h3").innerHTML = "Player 2 Wins";
  } else {
    document.querySelector("h3").innerHTML = "Draw";
  }
});

// solution #2
// Reload the page to refresh
/*
var playAgain = document.getElementById("play-again");
playAgain.addEventListener("click", function () {
  window.location.reload();
});
*/
