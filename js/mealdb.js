 document.getElementById('error-message').style.display = 'none';
 document.getElementById('spainer').style.display = 'none';
//  document.getElementById('meal-details').style.display = 'block';
 document.getElementById('search-result').style.display = 'block';

//  const toggleSpainer = displayStyle =>

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    document.getElementById('spainer').style.display = 'block';
    document.getElementById('search-result').style.display = 'none';

    if(searchText == '') {
       alert('please write something');
    }
    else{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        // console.log(url);
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
        .catch(error => displayError(error))
    }
}
const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if(meals.length == 0){
    
    }
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
      </div>
        `;
        searchResult.appendChild(div);
    })
    document.getElementById('spainer').style.display = 'none';
    document.getElementById('search-result').style.display = 'block';
}
const loadMealDetail = mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]));

}

const displayMealDetail = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =`
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetails.appendChild(div);
}
