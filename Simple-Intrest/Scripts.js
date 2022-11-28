let calBtn = document.getElementById("calculate");
calBtn.addEventListener("click",Calculate());
  function Calculate(){
    let p = parseInt(document.getElementById("Principal").value);
    let r = parseInt(document.getElementById("Rate").value);
    let t = parseInt(document.getElementById("Time").value);
    let duration = (document.getElementById("Duration").value);

    let simpleInt = duration =="Year" ? (p*r*t) / 100 : (p*r*t) / 1200;

    console.log(simpleInt);

    let amt = p + simpleInt;
    console.log(amt);

    document.getElementById("Result").innerHTML = `<div>Principal Amount: <span> ${p.toFixed(2)} </span></div>
  <div>Total Interest: <span>${simpleInt.toFixed(2)}</span></div>
  <div>Total Amount: <span>${amt.toFixed(2)}</span></div>`;
  };

