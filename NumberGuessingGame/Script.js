var msg1=document.getElementById("msg1");
var msg2=document.getElementById("msg2");
var msg3=document.getElementById("msg3");

/////// Random Number Guessing //////
var answer=Math.round(Math.random()*100);
var guessAtmpet = 0;
var guessedNum = [];

function play(){
    let userNum=document.getElementById("GuessNum").value;
    console.log(userNum);
    if(userNum>100 || userNum<1){
        alert("Please pick Number Between 1-100");
    }
    else{
        guessedNum.push(userNum);
        guessAtmpet=guessAtmpet+1;
        if(answer>userNum){
            msg1.textContent="Number of Attempt Made: "+guessAtmpet;
            msg2.textContent="Attempted Number :"+guessedNum;
            msg3.textContent="Your Number is Low";
        }
        else if(answer<userNum){
            msg1.textContent="Number of Attempt Made: "+guessAtmpet;
            msg2.textContent="Attempted Number :"+guessedNum;
            msg3.textContent="Your Number is High";
        }
        else{
            msg1.textContent="Number of Attempt Made: "+guessAtmpet;
            msg2.textContent="Attempted Number :"+guessedNum;
            msg3.textContent="You Win";
        }
    }
}