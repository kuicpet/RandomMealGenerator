const getMealBtn = document.getElementById('get_meal');
const mealContainer = document.getElementById('meal');

getMealBtn.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => createMeal(res.meals[0]));
});

const createMeal = (meal) => {
    const ingredients = [];
    //Get all ingredients from the object
    for(let i = 0;i <= 20;i++){
        if(meal[`strIngredient${i}`]){
            ingredients.push(`${meal[`strIngredient${i}`]} - ${mael[`strMeasure${i}`]}`);
        } else {
            //Stop if nomore Ingredients
            break;
        }
    }

    const newInnerHtml = `<div class="row my-3">"
                            <div class="col-sm-12">
                                <img src="${meal.strMealThumb}"alt="Meal Image" class="img-fluid text-center">
                                ${meal.strCategory ? `<p class="my-3"><strong>Category: </strong>${meal.strCategory}</p>`: ''}
                                ${meal.strArea ? `<p><strong>Area: </strong>${meal.strArea}</p>`: ''}
                                ${meal.strTags? `<p><strong>Tags: </strong>${meal.strTags}</p>`: ''}
                                <h5>Ingredients:</h5>
                                <ul>
                                    ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="col-sm-12">
                                <h4>${meal.strMeal}</h4><hr>
                                <p>${meal.strInstructions}</p>
                            </div>
                          </div>
                          ${meal.strYoutube ? `
                            <div class="row">
                            <div class="col-sm-3"></div>
                            <div class="col-sm-6 text-center m-3">
                            <h5>Video Recipe</h5>
                            <div class="VideoWrapper">
                            <iframe width="420" height="315"
                            src="https://youtube.com/embed/${meal.strYoutube.slice(-11)}"></iframe>
                            </div>
                        </div>
                            </div>
                            <div class="col-sm-3"></div>
                            </div>
                            
                          `:''}
                          `;
                          mealContainer.innerHTML = newInnerHtml;
}