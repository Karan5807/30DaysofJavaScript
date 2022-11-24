function colors(){
    let red = document.getElementById("Red").value;
    let blue = document.getElementById("Blue").value;
    let green = document.getElementById("Green").value;
    //////    Assign the Red , Green and Blue Value to the Body and Chnage the Style ////
    document.body.style.backgroundColor = "rgb("+ red +","+ green +","+ blue +")";

    let display = document.getElementById("Output");
    display.innerHTML = "rgb("+ red +","+ green +","+ blue +")";
}