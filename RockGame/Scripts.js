let [compScore,userScore] = [0,0];
var result = document.getElementById("result");

let choice_object = {
        'Rock':{
            'Rock' : 'Draw',
            'Scissor' : 'Win',
            'Paper' : 'Lose'
        },
        'Scissor':{
            'Rock' : 'Lose',
            'Scissor' : 'Draw',
            'Paper' : 'Win'
        },
        'Paper':{
            'Rock' : 'Win',
            'Scissor' : 'Lose',
            'Paper' : 'Draw'
        }
    } 


function checker(input){
    var choice = ["Rock","Paper","Scissor"];
    var num = Math.floor(Math.random()*3);
    
    document.getElementById("compChoice").innerHTML = ` Computer Choose : <span> ${choice[num].toUpperCase()} </span> `;

    document.getElementById("userChoice").innerHTML = `You Choose : <span> ${input.toUpperCase()} </span> `;

    var compCh = (choice[num]);

    switch(choice_object[input][compCh]){
        case 'Win':
            result.innerHTML = "You Win";
            userScore++;
            break;

        case 'Lose':
            result.innerHTML = "You Lose";
            compScore++;
            break;   
        case 'Draw':
            result.innerHTML = "Match Draw";
            break;     
    }
       
    document.getElementById("compScore").innerHTML = compScore;
    
    document.getElementById("userScore").innerHTML = userScore;

}
