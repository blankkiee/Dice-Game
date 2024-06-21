var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceImg);

document.querySelector(".img2").setAttribute("src", randomDiceImg);
