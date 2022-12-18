// Regex Pattern: /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/

let Email = document.getElementById("Email-Id");
let Icon = document.getElementById("Icon");
let Message = document.getElementById("Msg");

let MailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function Checker(){
    if(Email.value.match(MailRegex)){
        Icon.innerHTML = `<i class="fas fa-check-circle"></i>`;
        Icon.style.color = '#2ecc71';
        Message.style.display = `none`;
        Email.style.border = '2px soild #2ecc71';
    }
    else if(Email.value == ""){
        Icon.style.display = "none";
        Message.style.display = 'none';
        Email.style.border = '2px soild #d1d3d4';
    }
    else{
        Icon.innerHTML = `<i class="fas fa-exclamation-circle"></i>`;
        Icon.style.color = '#ff2851';
        Message.style.display = `block`;
        Email.style.border = '2px soild #ff2851';
    }
}
