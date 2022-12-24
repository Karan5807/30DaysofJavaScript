let Result = document.getElementById("Result");
let Btn = document.getElementById("Btn");

Btn.addEventListener("click" , ()=>{
console.log(Result.value);
let apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="; 
fetch(apiUrl+Result)
.then((res) => res.json())
.then((data) =>{
    let myMeal = data.meals[0];
    console.log(myMeal);
    console.log(myMeal.strMeal);
    console.log(myMeal.strArea);
    console.log(myMeal.strCategory);
    console.log(myMeal.strMealThumb);
    console.log(myMeal.strInstructions);

    let count = 1;
    let ingredients = [];
    for(let i in myMeal){
        let ingredient ="";
        let measure = "";
        if(i.startsWith("strIngredient") && myMeal[i]){
            ingredient = myMeal[i];
            measure = myMeal[`strMeasure` + count];
            count += 1;
            console.log(ingredient,measure);
            ingredients.push(`${measure} ${ingredient}`);
        }
    }
    console.log(ingredients);

    Result.innerHTML = `
    <img src=${myMeal.strMealThumb}>
    <div class="Detail">
    <h2>${myMeal.strMeal}</h2>
    <h4>${myMeal.strArea}</h4>
    </div>
    <div id="ingredient-con"></div>
    <div id="Recipe">
    <button id="Hide">X</button>
    <pre id="instruction">${myMeal.strInstructions}</pre>
    </div>
    <button id="Show"> View Recipe </button>
    `

    let ingredientCon = document.getElementById("ingredient-con");
    let parent = document.createElement("ul");
    let Recipe = document.getElementById("Recipe");
    let Hide = document.getElementById("Hide");
    let Show = document.getElementById("Show");
    

    ingredients.forEach((i) => {
        let child =document.createElement("li");
        child.innerText = i;
        parent.appendChild(child);
        ingredientCon.appendChild(parent);
    });

    Hide.addEventListener("click", ()=> {
        Recipe.style.display = "none";
    });

    Show.addEventListener("click", () => {
        Recipe.style.display = "block";
    });

});

});
