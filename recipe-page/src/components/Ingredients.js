import React from 'react';

const Ingredients = ({ ingredients }) => {
  return (
    <section className="ingredients-section">
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </section>
  )
}

export default Ingredients;