let Btn = document.getElementById("Search-Btn");
let Input = document.getElementById("country-Inp");

Btn.addEventListener("click", () =>{
    let Country = Input.value;
    let Url = `https://restcountries.com/v3.1/name/${Country}?fullText=true`;

    fetch(Url).then((Response)=> Response.json())
    .then((data)=>{
        console.log(data[0]);
        console.log(data[0].altSpellings[2]);
        console.log(data[0].capital[0]);
        console.log(data[0].continents[0]);
        console.log(data[0].name.common);
        console.log(data[0].flags.svg);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join(","));

        Output.innerHTML =`
    <img src="${data[0].flags.svg}" class="flag">
    <h2>${data[0].name.common}</h2>

    <div class="wrapper">
       <div class="data-wrapper">
       <h4>Offcial Name:</h4>
       <span>${data[0].altSpellings[2]}</span> 
       </div>
       </div> 


    <div class="wrapper">
       <div class="data-wrapper">
       <h4>Capital:</h4>
       <span>${data[0].capital[0]}</span> 
       </div>
       </div> 

       <div class="wrapper">
       <div class="data-wrapper">
       <h4>Continent:</h4>
       <span>${data[0].continents[0]}</span> 
       </div>
       </div> 


       <div class="wrapper">
       <div class="data-wrapper">
       <h4>Population:</h4>
       <span>${data[0].population}</span> 
       </div>
       </div>
       
       <div class="wrapper">
       <div class="data-wrapper">
       <h4>Currencies:</h4>
       <span>${Object.keys(data[0].currencies)[0]} - ${data[0].currencies[Object.keys(data[0].currencies)].name}</span> 
       </div>
       </div> 

       <div class="wrapper">
       <div class="data-wrapper">
       <h4>Language:</h4>
       <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span> 
       </div>
       </div>
      `;
    });
    
});

