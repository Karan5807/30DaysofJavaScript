
function calTip(){
    let person = parseInt(document.getElementById("Count").value);
    let personVal = document.getElementById("personVal").textContent=person;
    console.log(personVal);

    let percent = parseInt(document.getElementById("Percentage").value);
    let perVal = document.getElementById("perVal").textContent = percent;
    console.log(perVal);

    let BillAmt = parseInt(document.getElementById("BillAmt").value);
    console.log(BillAmt);

    let totalTip = ((BillAmt*(percent/100))/person).toFixed(2);
    console.log(totalTip);

    let Result = document.getElementById("Result");
    if(totalTip === "NaN"){
        Result.innerHTML = `<div> Please Enter Valid Input Values `;
    }

    Result = document.getElementById("Result").innerHTML = `<div>Total Tip = ${totalTip} </div>`; 
}
