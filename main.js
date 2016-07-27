document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log("ready");
  let buttons = document.getElementsByClassName('theButtons')

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonClicked);
  }
}

function buttonClicked(event) {
  console.log("clicked!");
  let newNumber = "" + event.target.textContent;
  inputField = (document.getElementById('inputVal').value += newNumber);
  inputField = Number(inputField);
}

// create two random numbers
let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
document.getElementById('num1').textContent = num1;
document.getElementById('num2').textContent = num2;

let answer = (num1 + num2);
let finalAnswer = document.createTextNode(answer);

function clearing() {
  document.getElementById("inputVal").value = "";
}

let inputField = +document.getElementById("inputVal").textContent;

function submit() {

  if (inputField === answer) {
    alert("AWESOME!!!!!!");
    setTimeout(function() {
      location.reload()
    }, 500);
  } else {
    alert("NO BUENO!!!!!!!");
    setTimeout(function() {
      location.reload()
    }, 500);
  }
}
