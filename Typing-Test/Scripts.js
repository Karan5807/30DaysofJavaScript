//Random Quotes Api URL
const apiUrl = "https://api.quotable.io/random?minLength=80&maxLength=200";
const quoteSection = document.getElementById("Lines");
const userInput = document.getElementById("Input-Lines");
let quote = "";
let time = 60;
let timer = "";
let mistakes = 0;

//Display random quotes
const renderNewQuote = async () => {
  //Fetch contents from url
  const response = await fetch(apiUrl);

  //Store response
  let data = await response.json();

  //Access quote
  quote = data.content;

  //Array of characters in the quote
  let arr = quote.split("").map((value) => {
    //wrap the characters in a span tag
    return "<span class='quote-chars'>" + value + "</span>";
  });
  //join array for displaying
  quoteSection.innerHTML += arr.join("");
};

//Logic for comparing input words with quote
userInput.addEventListener("input", () => {
  let quoteChars = document.querySelectorAll(".quote-chars");
  //Create an arrat from received span tags
  quoteChars = Array.from(quoteChars);

  //array of user input characters
  let userInputChars = userInput.value.split("");

  //loop through each character in quote
  quoteChars.forEach((char, index) => {
    //Check if char(quote character) = userInputChars[index](input character)
    if (char.innerText == userInputChars[index]) {
      char.classList.add("success");
    }
    //If user hasn't entered anything or backspaced
    else if (userInputChars[index] == null) {
      //Remove class if any
      if (char.classList.contains("success")) {
        char.classList.remove("success");
      } else {
        char.classList.remove("fail");
      }
    }
    //If user enter wrong character
    else {
      //Checks if we alreasy have added fail class
      if (!char.classList.contains("fail")) {
        //increment and display mistakes
        mistakes += 1;
        char.classList.add("fail");
      }
      document.getElementById("Mistake").innerText = mistakes;
    }
    //Returns true if all the characters are entered correctly
    let check = quoteChars.every((element) => {
      return element.classList.contains("success");
    });
    //End test if all characters are correct
    if (check) {
      displayResult();
    }
  });
});

//Update Timer on screen
function updateTimer() {
  if (time == 0) {
    //End test if timer reaches 0
    displayResult();
  } else {
    document.getElementById("Time").innerText = --time + "s";
  }
}

//Sets timer
const timeReduce = () => {
  time = 60;
  timer = setInterval(updateTimer, 1000);
};

//End Test
const displayResult = () => {
  //display result div
  document.querySelector("Result").style.display = "block";
  clearInterval(timer);
  document.getElementById("Start").style.display = "none";
  userInput.disabled = true;
  let timeTaken = 1;
  if (time != 0) {
    timeTaken = (60 - time) / 100;
  }
  document.getElementById("wpm").innerText =
    (userInput.value.length / 5 / timeTaken).toFixed(2) + " wpm";
  document.getElementById("Accu").innerText =
    Math.round(
      ((userInput.value.length - mistakes) / userInput.value.length) * 100
    ) + " %";
};

//Start Test
const startTest = () => {
  mistakes = 0;
  timer = "";
  userInput.disabled = false;
  timeReduce();
  document.getElementById("Start").style.display = "none";
  document.getElementById("Stop").style.display = "block";
};

window.onload = () => {
  userInput.value = "";
  document.getElementById("Start").style.display = "block";
  document.getElementById("Stop").style.display = "none";
  userInput.disabled = true;
  renderNewQuote();
};
