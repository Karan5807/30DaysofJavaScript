let calBtn=document.getElementById("Btn");
calBtn.addEventListener("click",calEmi);

function calEmi(){
     let loanAmt = parseInt(document.getElementById("TotalAmt").value);
     let rateMonth = parseInt(document.getElementById("Rate").value);
     let month = parseInt(document.getElementById("Month").value);

     let Intrest = (loanAmt * (rateMonth * 0.01))/month;
     let Emi = ((loanAmt/month) + Intrest).toFixed(2);

     let Result = document.getElementById("Result");
     Result.innerHTML = `<div> Total Emi = <span>${Emi}</span></div>`;
}
window.addEventListener("load",calEmi);

