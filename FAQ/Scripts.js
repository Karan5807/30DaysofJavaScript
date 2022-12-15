let Toggle = document.getElementsByClassName("toggle");
console.log(Toggle);

let Content = document.getElementsByClassName("content");
console.log(Content);

let Icon = document.getElementsByClassName("icon");
console.log(Icon);

for(let i=0; i<Toggle.length; i++){
    Toggle[i].addEventListener('click', ()=>{

        console.log(Content[i].style.height)
        console.log(Content[i].scrollHeight)

        if(parseInt(Content[i].style.height) != Content[i].scrollHeight){
            Content[i].style.height = Content[i].scrollHeight + "px";

            Toggle[i].style.color = "#0084e9";
            Icon[i].classList.remove('fa-plus');
            Icon[i].classList.add('fa-minus');

        }
        else{
            Content[i].style.height = "0px";
            Toggle[i].style.color = "#111130";
            Icon[i].classList.remove('fa-minus');
            Icon[i].classList.add('fa-plus');
        }

        for( let j=0; j<Content.length; j++){
            if(j!==i){
                Content[j].style.height = "0px";
                Toggle[j].style.color = "#111130";
                Icon[j].classList.remove('fa-minus');
                Icon[j].classList.add('fa-plus');
            }
        }
    });
}
