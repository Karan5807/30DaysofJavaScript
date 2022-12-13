//// Selecting all the Character which should be Inclded into Password Expect Space ////
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"$%&/()=?@~`\\.\';:+=^*_-0123456789';

///////// A Random function for Creating random Value according to the Length given by the User /////


function randomVal(val){
    return Math.floor(Math.random()*val);
}

///// Main function of the Program /////

let Output = document.getElementById("Output");
let Generate = document.getElementById("Generate");
console.log(Generate);
Generate.addEventListener("click",genPass())


function genPass(){
    let Length = document.getElementById("Val").value;
    document.getElementById("Print-Val").textContent = Length;
    let str ='';

    ///// Using For loop selecting character according to the length of the Password required by the User ////

    for(let i=0; i<Length; i++){
        let random = randomVal(characters.length);
        str += characters.charAt(random);
    }
    /////// Printing Output to the String ///
    Output.value = str;
}
 ////// Here is Copy Function  in this first we select the Output////
function Copy(){
    Output.select();
    document.execCommand('copy');
    alert("Password Copied");
}
genPass();

