let Hr = document.getElementById("Hr");
let Min = document.getElementById("Min");
let Sec = document.getElementById("Sec");

/// Here we use SetInterval function which javascript in built function which calls any function after a given millisecond of time util the clear interval comes. ///

 let clock = setInterval(
    function time (){
        var currTime = new Date(); 
        
        //// Date object create with new Date() which is js Built in function which calls many other function like hours min second by using that. //

        var hour = currTime.getHours();
        var minutes = currTime.getMinutes();
        var seconds = currTime.getSeconds();

        if(hour < 10){
            hour = "0" +hour;
        }
        if(minutes < 10){
            minutes = "0" +minutes;
        }
        if(seconds < 10){
            seconds = "0" +seconds;
        }

        Hr.textContent = hour;
        Min.textContent = minutes;
        Sec.textContent = seconds;
    }
 )
