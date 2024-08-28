import React from 'react';

const Nutrition = ({ nutrition }) => {
  return (
    <section className="nutrition-section">
      <h2>Nutrition</h2>
      <p>The table below shows nutritional values per serving without the additional fillings.</p>
      {nutrition && (
        <div className="nutrition-table">
          <div className="nutrition">Calories</div>
          <div className="value">{nutrition[0].calories}</div>
          <div className="nutrition">Carbs</div>
          <div className="value">{nutrition[0].carbs}</div>
          <div className="nutrition">Protein</div>
          <div className="value">{nutrition[0].protein}</div>
          <div className="nutrition">Fat</div>
          <div className="value">{nutrition[0].fat}</div>
        </div>
      )}
    </section>
  )
}

export default Nutrition;