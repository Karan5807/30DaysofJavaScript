//// Creating List and Add items in It ////
let addBtn=document.getElementById("AddBtn");
addBtn.onclick = function (){
    let text = document.getElementById("Textfield").value;
    if(text.length==0){
        alert("Please Add Task !");
    }
    else{
        let newLi=document.createElement("li");
        newLi.classList.add("myList-items");

        newLi.innerHTML = `<p class="items">${text}</p> 
        <button class="Btn" id="EdtBtn" onclick="Edit(this)">Edit</button> 
        <button class="Btn" id="DelBtn" onclick="Remove(this)">Remove</button>`
        
        let parentList =document.getElementById("parentList");
        parentList.appendChild(newLi);
    }
}
 //// Deleting items From the List ////
 function Remove(element){
    let delItem=element.parentElement;
    delItem.remove();
 }
 ///// Edit Items From The List ////
 function Edit(element){
    if(element.textContent == "Done"){
        element.textContent="Edit";
        let preText=element.previousElementSibling.value;
        let newWords=document.createElement("p");
        newWords.className="items";
        newWords.textContent = preText;
        element.parentElement.replaceChild(newWords,element.previousElementSibling);
    }
    else{
    element.textContent="Done";
    let preText=element.previousElementSibling.textContent;
    let newText=document.createElement("input");
    newText.type="text";
    newText.className="items";
    newText.value = preText;
    /// For Replacing the Previous Text With New Text First we have to Select their Parent element and then replace with it first child //
    element.parentElement.replaceChild(newText,element.previousElementSibling);
    }
 }
 /////////////////////End of Code ///////////////////////////