function Roll() {
  var roll1 = Math.ceil(Math.random() * 6);
  var roll2 = Math.ceil(Math.random() * 6);
  var imgpath1 = "images/dice" + roll1 + ".png";
  var imgpath2 = "images/dice" + roll2 + ".png";
  document.querySelector("img.img1").src = imgpath1;
  document.querySelector("img.img2").src = imgpath2;
  if (roll1 > roll2) {
    document.querySelector("h2").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (roll2 > roll1) {
    document.querySelector("h2").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h2").innerHTML = "Draw!";
  }
}
