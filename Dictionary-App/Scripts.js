

const url ="https://api.dictionaryapi.dev/api/v2/entries/en/";

const BtnSearch = document.getElementById("BtnSearch");
const Sound = document.getElementById("Sound");
const Result = document.getElementById("Result");

BtnSearch.addEventListener("click", ()=>{
    let Searchword = document.getElementById("SearchWord").value;
    console.log(Searchword);

    fetch(`${url} ${Searchword}`)
    .then((Response) => Response.json())
    .then((data) => {
        console.log(data);

        Result.innerHTML = `<div class="word">
        <h3>${Searchword}</h3>
        <button onclick="playSound()">
            <i class="fa-solid fa-volume-high"></i>
        </button>
    </div>
    <div class="detail">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
    </div>
    <p class="word-meaning">
        ${data[0].meanings[0].definitions[0].definition}
    </p>
    <p class="word-example">${data[0].meanings[0].definitions[0].example || ""}</p>`;
    Sound.setAttribute("src",`https:${data[0].phonetics[0].audio}`);
    });
});

function playSound(){
    Sound.play();
}
