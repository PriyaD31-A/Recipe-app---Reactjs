import React from 'react'

import { useLocation } from 'react-router-dom'

const Recipedetails = () => {
    const location = useLocation();
    const recipe = location.state?.recipe;     

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div className="container">
      <h1 className='recipename'>{recipe.label}</h1>
        <img src={recipe.image} alt={recipe.label} className="img-fluid img2" />
           <h3 className='Ingredients'>Ingredients</h3>
              <ul className='list'>
                {recipe.ingredientLines.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
              </ul>
            <h3 className='mealtype'>MealType</h3>
          <h5 className='mealtype2'>{recipe.mealType}</h5>
        <h3 className='cuisinetype'>CuisineType</h3>
      <h2 className='cuisinetype2'>{recipe.cuisineType}</h2>
    <h3 className='HealthLabels'>HealthLabels</h3>
  <h2 className='HealthLabels2'>{recipe.healthLabels}</h2>
  <h3 className='calories'>calories</h3>
<h2 className='calories2'>{recipe.calories}</h2>
</div>
  )
}

export default Recipedetails
