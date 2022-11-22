function changeColor(){
    var x=Math.round(Math.random()*255); 
    var y=Math.round(Math.random()*255);
    var z=Math.round(Math.random()*255);
    var bgColor="rgb("+x+","+y+","+z+")";
    document.body.style.backgroundColor=bgColor;
    
}