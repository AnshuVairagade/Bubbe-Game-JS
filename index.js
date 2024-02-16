// global variables 🌏
var hitrn = 0;

// bubble add karne ka casual tarika 😎

function makeBubble() {
  var clutter = "";
  let rn;

  for (let a = 1; a <= 102; a++) {
    rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble flex">${rn}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}

// ⌛ Creating a timer in js ⏲
let timer = 60;
function runTimer(){
    var timerInt = setInterval(function(){
        if(timer > 0){
           timer--;
           document.querySelector(".timerval").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector(".pbtm").innerHTML = "<h1>Game Over <br>  <br> Your score is " +score+"</h1>";
        }
    }, 1000)
}

// Chnaging value of hit 🎯
function changeHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector(".hit").textContent = hitrn;
    // makeBubble();
}

// chanigng score
let score = 0;
function increaseScore(){
    score = score+10;
    document.querySelector(".scoreval").textContent = score;
}


// Event Bubbling:

document.querySelector(".pbtm").addEventListener("click", function(details){
    console.log( Number(details.target.textContent));
    let text = Number(details.target.textContent)
    console.log(text);
    console.log(hitrn);
    if(text === hitrn){
        increaseScore();
        changeHit();
        makeBubble();
    }
});



runTimer();
makeBubble();
changeHit();


