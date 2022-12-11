const months = [31,28,31,30,31,30,31,31,30,31,30,31];  ////////// Defining the Days in the Months ///

function ageCalculate(){
      ////// Getting details of input date value ////
    let inputDate = new Date(document.getElementById("date-input").value);
    let birthMonth,birthDate,birthYear;
    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }
       ////// Getting Todays value Date  /////
    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();

    ///////////////// Leap Year Function Checker //////////////
    leapChecker(currentYear);
    if(
          birthDetails.year > currentYear ||
        ( birthDetails.month > currentMonth && birthDetails.year == currentYear) || 
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
    ){
        alert("Not Born Yet");
        displayResult("-","-","-");
        return;
    }
 
    /////////////// Calculating Age /////////////
    birthYear = currentYear - birthDetails.year;

    if(currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;
    }
    else{
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if(currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
    }
    else{
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
        if(birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }
    displayResult(birthDate,birthMonth,birthYear);
}
 
////////////////   Display Result Function ///////////////
function displayResult(bDate,bMonth,bYear){
    document.getElementById("Years").textContent = bYear;
    document.getElementById("Months").textContent = bMonth;
    document.getElementById("Days").textContent = bDate;
}


////////////// Leap Year Checking Function //////////////
function leapChecker(year){
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29;
    }
    else{
        months[1] = 28;
    }
}