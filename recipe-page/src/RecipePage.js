import React from 'react';
import RecipeCard from './RecipeCard';
import recipes from './data/recipes.json';

const RecipePage = () => {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipePage;