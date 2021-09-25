function playCraps() {
    console.log("playCraps() is running!");
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2
    
    document.getElementById("die1").innerHTML = "Die 1 = " + die1;
    document.getElementById("die2").innerHTML = "Die 2 = " + die2;
    document.getElementById("sum").innerHTML = "Sum of dice: " + sum;
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsResults").innerHTML = "CRAPS - you lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsResults").innerHTML = "DOUBLES - you win";
    }
    else {
        document.getElementById("crapsResults").innerHTML = "NOTHING - you drawed, please try again";
    }
}

function blastOff() {
    var currTime = 50;
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 5000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 10000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 15000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 20000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 25000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 30000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 35000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 40000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 45000);
    setTimeout (function () {
        currTime -= 5;
        document.getElementById("countDownTimer").innerHTML = "Blastoff!"
    }, 50000);
}