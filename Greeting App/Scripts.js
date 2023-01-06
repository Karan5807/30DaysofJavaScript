let container = document.querySelector(".container");

let Time = new Date().getHours();
console.log(Time);

let Greeting = Time >=4 && Time < 12 ? "Good Morning": Time >=12 && Time < 18 ? "Good Afternoon":
"Good Evening";
console.log(Greeting);
container.innerHTML = `<h1>${Greeting}</h1>`;