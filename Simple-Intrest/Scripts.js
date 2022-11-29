  let calBtn = document.getElementById("Calculate");
  calBtn.addEventListener("click",Calculate);
  window.addEventListener("load",Calculate);
    function Calculate(){
    let P = parseInt(document.getElementById("Principal").value);
    let R = parseInt(document.getElementById("Rate").value);
    let T = parseInt(document.getElementById("Time").value);
    let duration = (document.getElementById("Duration").value);

    let simpleInt = 0;
    let Amt = 0;

    ///// Calculation of Intrest According to The Duration ///
    if(duration == "Year"){
      simpleInt = (P*R*T)/100;
    }
    else{
      simpleInt = (P*R*T)/1200;
    }

    Amt = P + simpleInt;

    let Result = document.getElementById("Result");
    Result.innerHTML =  `<div>Principal Amount: <span>${P.toFixed(2)}</span></div>
    <div>Total Interest: <span>${simpleInt.toFixed(2)}</span></div>
    <div>Total Amount: <span>${Amt.toFixed(2)}</span></div>`;
  };
  
