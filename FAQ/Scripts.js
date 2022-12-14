let Toggle = document.getElementsByClassName("toggle");
console.log(Toggle);

let Content = document.getElementsByClassName("content");
console.log(Content);

let Icon = document.getElementsByClassName("icon");
console.log(Icon);

for(let i=0; i<Toggle.length; i++){
    Toggle[i].addEventListener('click', ()=>{
        if(parseInt(Content[i].style.height) != Content[i].scrollHeight){
            Content[i].style.height = Content[i].scrollHeight + "px";
        }
    });
}
