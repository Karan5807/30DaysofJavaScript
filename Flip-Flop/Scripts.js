let Burger = 0;
let Doughnut = 0;
let Food = document.querySelector(".Food");
let Flip = document.querySelector("#flip-btn");
let Reset = document.querySelector("#reset-btn");


Flip.addEventListener("click",() => {
    let i=Math.floor(Math.random()*2);
 //   Food.style.animation = "none";
    if(i){
        setTimeout(function(){
            Food.style.animation = "spin-Burger 5s forwards";
        }, 100);
        Burger++;
    }
    else{
        setTimeout(function(){
            Food.style.animation = "spin-Doughnut 5s forwards";
        }, 100);
        Doughnut++;
    }
    setTimeout(updateState, 3000);
    disableButton();
});


function updateState(){
    document.getElementById("Chesse-Count").textContent = `Chesse-Burger: ${Burger}`;
    document.getElementById("DoughNut-Count").textContent = `Doughnut: ${Doughnut}`;
}

function disableButton(){
    Flip.disabled = true;
    setTimeout(function(){
        Flip.disabled = false;
    },3000);
}


Reset.addEventListener("click", () => {
    Food.style.animation = "none";
    Burger = 0;
    Doughnut = 0;
    updateState();
});