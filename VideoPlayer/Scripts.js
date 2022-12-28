var v1 = document.getElementById("v1");
function vplay(){
let Btn = document.getElementById("Btn");
if(Btn.textContent=="Play"){
    v1.play();
    Btn.textContent = "Pause";
    Btn.style.backgroundColor="Red";
}
else{
    v1.pause();
    Btn.textContent = "Play";
    Btn.style.backgroundColor = "Green";
}
}

function vol(){
    let slider = document.getElementById("Volume").value;
    console.log(slider);
    v1.volume=slider/100;
}

function dur(){
   let Dur = document.getElementById("Dur");
   Dur.textContent=v1.duration;
   console.log(Dur);
   alert(v1.duration);
}
