function calculate(){
   var bmi;
   var result = document.getElementById("results");

    var weight = document.getElementById("Weight").value;
    document.getElementById("weightValue").textContent=weight+" Kg";

    var height = document.getElementById("Height").value;
    document.getElementById("heightVal").textContent=height+" Cm";
    
    bmi =(weight/Math.pow((height/100),2)).toFixed(1);
    result.textContent=bmi;
    let category=document.getElementById("category");

     if(bmi<18.5){
        category.textContent = "Underweight";
        category.style.color = "yellow";
        result.style.color="yellow";
     }
     else if( bmi>=18.5 && bmi <=24.9){
        category.textContent = "Normal";
        category.style.color = "green";
        result.style.color="green";
     }
     else if( bmi >= 24.9 && bmi <=29.9){
        category.textContent = "Over-Weight";
        category.style.color = "#ff0000";
        result.style.color="#ff0000"
     }
     else{
        category.textContent = "Obese";
        category.style.color="#a70000";
        result.style.color="#a70000";
     }
}
