//Change Dice1

var randNumber1 = Math.floor(Math.random() * 6) +1; // Random No. between 1 and 6

var randDiceImg = "dice" + randNumber1 + ".png";    // dice1.png - dice6.png

var randImgSrc = "images/" + randDiceImg;           //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randImgSrc);

//Change Dice2

var randNumber2 = Math.floor(Math.random() * 6) +1; // Random No. between 1 and 6

var randImgSrc2 = "images/dice" + randNumber2 + ".png";           //images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randImgSrc2);

// Win / Loss

if (randNumber1 > randNumber2){
    document.querySelector("h1").innerHTML = "Player 1 is the winner 🥳"
}

else if(randNumber2 > randNumber1){
    document.querySelector("h1").innerHTML = "Player 2 is the winner 🎉"
}
else{
    document.querySelector("h1").innerHTML = "It's a Draw! Go again"
}