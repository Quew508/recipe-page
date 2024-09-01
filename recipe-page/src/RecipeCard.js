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
      <div className='body'>
        <h1 className='young-serif-regular stone-900-color title'>{recipe.title}</h1>
        <p className='outfit-400 stone-600-color'>{recipe.intro}</p>
        <Preparation preparations={recipe.preparations} />
        <Ingredients ingredients={recipe.ingredients} />
        <Instructions instructions={recipe.instructions} />
        <Nutrition nutrition={recipe.nutrition} />
      </div>
    </div>
  );
};

export default RecipeCard;
