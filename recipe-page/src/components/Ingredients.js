import React from 'react';

const Ingredients = ({ ingredients }) => {
  return (
    <section className="ingredients-section">
      <h2 className='young-serif-regular rose-800-color'>Ingredients</h2>
      <ul className='stone-600-color outfit-400'>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </section>
  )
}

export default Ingredients;