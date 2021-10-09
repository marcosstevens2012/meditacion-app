const circleProgress = document.querySelector(".circle-progress");
const numberOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breathsText = document.querySelector(".breaths-text");
let breathsLeft = 3;
var audio = document.getElementById("audio");

// Watching for selected breaths from user
numberOfBreaths.addEventListener("change", () => {
  breathsLeft = numberOfBreaths.value;
  breathsText.innerText = breathsLeft;
});

// Grow/Shrink Circle
const growCircle = () => {
  circleProgress.classList.add("circle-grow");
  setTimeout(() => {
    circleProgress.classList.remove("circle-grow");
  }, 8000);
};

// Breathing Instructions
const breathTextUpdate = () => {
  breathsLeft--;
  breathsText.innerText = breathsLeft;
  instructions.innerText = "Inhala";
  setTimeout(() => {
    instructions.innerText = "Aguante la respiración";
    setTimeout(() => {
      instructions.innerText = "Exhala lentamente";
    }, 4000);
  }, 4000);
};

// Breathing App Function
const breathingApp = () => {
  const breathingAnimtaion = setInterval(() => {
    if (breathsLeft === 0) {
      clearInterval(breathingAnimtaion);
      audio.pause();
      instructions.innerText = "Se completó la sesión de respiración. Haga clic en 'Comenzar' para iniciar otra sesión.";
      start.classList.remove("button-inactive");
      breathsLeft = numberOfBreaths.value;
      breathsText.innerText = breathsLeft;
      return;
    }
    growCircle();
    breathTextUpdate();
  }, 12000);
};

// Start Breathing
start.addEventListener("click", () => {
    audio.play();
    start.classList.add("button-inactive");
    instructions.innerText = "Relájese y prepárese para comenzar a respirar.";
    setTimeout(() => {
        instructions.innerText = "La respiración está a punto de comenzar ...";
        setTimeout(() => {
        breathingApp();
        growCircle();
        breathTextUpdate();
        }, 2000);
    }, 2000);
    
});
