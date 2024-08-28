import React from 'react';
import Preparation from './components/Preparation';
import Ingredients from './components/Ingredients';
import Instructions from './components/Instructions';
import Nutrition from './components/Nutrition';

const RecipeCard = ({ recipe }) => {
  // Get the image path from the images object
  const recipeImage = `${recipe.image}`;

  return (
    <div className="recipe-card">
      <img src={recipeImage} alt={recipe.title} className="recipe-image" />
      <h1>{recipe.title}</h1>
      <p>{recipe.intro}</p>
      <Preparation preparations={recipe.preparations} />
      <Ingredients ingredients={recipe.ingredients} />
      <Instructions instructions={recipe.ingredients} />
      <Nutrition nutrition={recipe.nutrition} />
    </div>
  );
};

export default RecipeCard;
