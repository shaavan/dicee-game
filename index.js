var randomNumber1 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png")

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png")

var winMessage = "";

if (randomNumber1 > randomNumber2) {
    winMessage = "🚩 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    winMessage = "Player 2 Wins! 🚩";
}
else {
    winMessage = "It's a Draw!";
}

document.querySelector("h1").textContent = winMessage;