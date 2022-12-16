
function calLove(){
    let uRName = document.getElementById("uRName").value;
    let pRName = document.getElementById("pRName").value; 

    let Result = document.getElementById("Result");
    if(uRName.length<=2){
        alert("Enter at least 3 Character");
    }
    else if(pRName.length<=2){
        alert("Enter at Least 3 Character");
    }
    else{
        var random = Math.floor(Math.random()*100);
        Result.textContent = random;
        
        if(random > 0 && random < 10){
            Result.textContent= "Love Percentage is "+random+" Close the Browser! Right Now";
        }
        else if(random>10 && random<30){
            Result.textContent = "Love Percentage is "+random;
        }
        else if(random>30 && random<60){
            Result.textContent = "Love Percentage is "+random;
        }
        else if(random>60 && random<80){
            Result.textContent = "Love Percentage is "+random+ " Lovely RelationShip";
        }
        else if(random>80 && random<100){
            Result.textContent = "Love Percentage is "+random+ " Marry as soon as Possible";
        }
    }
}
