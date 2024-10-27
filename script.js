var score = 0;
var timer = 30;
var hit;
var bubbleval;

// adding timer
document.querySelector(".timeval").innerHTML = timer;

// making bubble with random number
function makeBubble() {
  bubbleval = "";

  for (let i = 0; i < 136; i++) {
    let num = Math.floor(Math.random() * 10);
    bubbleval += ` <div class="bubble">${num}</div>`;
  }
  document.querySelector(".content").innerHTML = bubbleval;
}

// Timer
function runTimer() {
  var time = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector(".timeval").textContent = timer;
    } else {
      clearInterval(time);
      document.querySelector(".content").innerHTML = `<h1> GAME OVER </h1> `;
      document.querySelector(".content").innerHTML = `<img src='play.svg'></img> `;

      document.querySelector(".newhit").textContent = "--";
    }
  }, 1000);
}

// generating random hit number
function getNewHit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector(".newhit").textContent = hit;
}

// increase score when hitting correct number
function increaseScore() {
  score += 10;
  document.querySelector(".scoreval").textContent = score;
}

// code to start game
document
  .querySelector(".content")
  .addEventListener("click", function (details) {
    if (timer == 30) {
      runTimer();
    }

    var clickedNum = Number(details.target.textContent);
    if (clickedNum === hit) {
      increaseScore();
      makeBubble();
      getNewHit();
    }
  });

makeBubble();

getNewHit();
