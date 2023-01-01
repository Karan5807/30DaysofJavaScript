let Btn = document.getElementById("Btn");
Btn.addEventListener("click", ()=>{
    let Inpcity = document.getElementById("cityInp").value;
    let result = document.getElementById("weather");
    console.log(result,Inpcity);

    const apikey = "18202b48f1ace4c33c8ff7eb6b6195ee";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${Inpcity}&appid=${apikey}&units=metric`;
    console.log(url);

    fetch(url).then((Response)=>Response.json())
    .then((Data)=>{
        console.log(Data);
        var long = Data.coord.lon;
        var lati = Data.coord.lat;
        var city = Data.name;
        var country = Data.sys.country;
        var desc = Data.weather[0].description;
        var temp = Data.main.temp;
        var feel_like = Data.main.feels_like;
        var humdity = Data.main.humidity;
        var seaLevel = Data.main.sea_level+" ft";
        var wind = Data.wind.speed;
        var sunrise = Math.floor((Data.sys.sunrise)/100000000);
        var sunset = Math.round((Data.sys.sunset)/100000000);

        result.innerHTML = `
        <div class="Location">
        
        
        </div>
        <h3>${city} , ${country}</h3>
        <div class="Data">
        <div>
        <p>Longitude : ${long}</p>
        <p>Description: ${desc}</p>
        <p>Temperatue : ${temp}</p>
        <p>Feel's Like : ${feel_like}</p>
        <p>Humdity : ${humdity}</p>
        </div>
        <div>
        <p>Latitude : ${lati}</p>
        <p>Sea-Level : ${seaLevel}</p>
        <p>Wind-Speed : ${wind}</p>
        <p>Sunrise : ${sunrise}</p>
        <p>Sunset : ${sunset}</p>
        </div>
        
        `;
    });

});
