const Joke = document.getElementById("Joke"); 
/// Selecting the Joke Area where joke should be Published ///

const Btn = document.getElementById("Btn");
/// Select Button ///

/// Select the URL Link for the  from the API ///
const url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist&type=single";

/// Create a function which convert Json data into Text which url and provide text output ///

let GenJoke = () =>{
    fetch(url)  ///// Fetching url each time when the page reload and button clicked ///
    .then(data => data.json ())/// calling data in format of Object From ////
    .then(item => {
        Joke.textContent = `${item.joke}`;
    });
}
Btn.addEventListener("click",GenJoke);
GenJoke(); /// Calling function ///
