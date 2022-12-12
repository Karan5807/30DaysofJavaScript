let text = document.getElementById("Text");
text.addEventListener("input", () =>{
    let count = (text.value).length;
    console.log(count);

    let Result = document.getElementById("Result").textContent = `Total Cahracter : ${count}`;
})
