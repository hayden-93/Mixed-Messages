function generateMessage() {
  //Make arrays of outputs
  const messages = [
    "Today is going to be a good day!",
    "Carpe diem...",
    "Will Vy get to 300 followers?",
    "People have unfollowed Vy for a few days now",
    "You'll have an ok day!",
  ];

  const colors = ["red", "pink", "purple", "green", "blue"];

  const num = ["25", "46", "7000", "89", "55"];

  let randomNum1 = Math.floor(Math.random() * 5);
  let randomNum2 = Math.floor(Math.random() * 5);
  let randomNum3 = Math.floor(Math.random() * 5);

  let randMessage = messages[randomNum1];
  let randColor = colors[randomNum2];
  let randNum = num[randomNum3];

  let dayMessage = document.getElementById("day");
  dayMessage.innerHTML = randMessage;

  let colorMessage = document.getElementById("color");
  if (randColor == "red") {
    colorMessage.style.color = "red";
  } else if (randColor == "pink") {
    colorMessage.style.color = "pink";
  } else if (randColor == "purple") {
    colorMessage.style.color = "purple";
  } else if (randColor == "green") {
    colorMessage.style.color = "green";
  } else {
    colorMessage.style.color = "blue";
  }
  colorMessage.innerHTML = `Your color for today is ${randColor}!`;

  let numberMessage = document.getElementById("number");
  numberMessage.innerHTML = `Your special number for today is ${randNum}!`;
}
//Gives the button a click listener to call the function
let buttons = document.getElementById("buttonMessage");
buttons.addEventListener("click", generateMessage);
