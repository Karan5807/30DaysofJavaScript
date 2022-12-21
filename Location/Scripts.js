let Btn = document.getElementById("Btn");
let Location = document.getElementById("Location");

Btn.addEventListener("click",()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(checkLoc,checkError);
    }
    else{
        Location.innerText = "This browser does not support Geolocation";
    }
});

///// checking Errors /////

function checkError(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            Location.innerText = "Please allow access to Location";
            break;

        case error.POSITION_UNAVAILABLE:  
        Location.innerText="Location information Unavailable";
        break;

        case error.TIMEOUT:
            Location.innerText="The Request to get User Location timed Out";
    }
};

///// Getting Location //////

const checkLoc = async(position) =>{
    let response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`);

    let data = await response.json();
    console.log(data.address.city);
    Location.innerText = `${data.address.city},${data.address.country}`;
}
