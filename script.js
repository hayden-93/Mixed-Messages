//Script for Mixed Messages

function generateMessage() {
  //Make arrays of outputs
  const messages = [
    "Your day will be great!",
    "Your day will be rubbish!",
    "Your day will be pretty long!",
    "Your day will be horrible!!!",
    "You'll have an ok day!",
  ];

  const colors = ["red", "pink", "purple", "green", "blue"];

  const num = ["25", "46", "7000", "89", "55"];
  //Generate random numbers for each array
  let randomNum1 = Math.floor(Math.random() * 5);
  let randomNum2 = Math.floor(Math.random() * 5);
  let randomNum3 = Math.floor(Math.random() * 5);

  let randMessage = messages[randomNum1];
  let randColor = colors[randomNum2];
  let randNum = num[randomNum3];

  // Grab id elements from the HTML Document and change them
  let dayMessage = document.getElementById("day");
  dayMessage.innerHTML = randMessage;

  //This changes the color on the line
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
