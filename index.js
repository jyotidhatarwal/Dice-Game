var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1)+1;

var randomDiceImage = "dice" + randomNumber1 +".png";

var randomDiceImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImageSource);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2) +1;

var randomDiceImage2 ="dice" + randomNumber2 +".png";
var randomDiceImage2Source ="images/"+randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2Source);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML ="🎇Player 1 wins";
}else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML ="🎇Player 2 wins";
}else if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML ="Match Draw";
}
