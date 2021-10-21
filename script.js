var mole = document.getElementById("mole")
var mound = document.getElementById("mound")
var counter = 0;

function jump() {
        if (mole.classList !="jump") {
    mole.classList.add("jump");

    setTimeout(function () {
        mole.classList.remove("jump"); 
    }, 300);
    }
}

let isAlive = setInterval(function () {
   let dinoTop = parseInt(window.getComputedStyle(mole).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(mound).getPropertyValue("left"));
    
    if (cactusLeft < 30 && cactusLeft > 0 && dinoTop >= 160) {
        mound.style.animation = "none";
        alert("Game Over. Refresh to play again. Score: "+Math.floor(counter/100));
        counter=0;
        mound.style.display = "mound 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
},10)

document.addEventListener("keydown", function (event) {
    jump();
});