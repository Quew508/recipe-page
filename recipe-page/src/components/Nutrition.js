import React from 'react';

const Nutrition = ({ nutrition }) => {
  return (
    <section className="nutrition-section">
      <h2 className='young-serif-regular rose-800-color'>Nutrition</h2>
      <p className='stone-600-color outfit-400'>The table below shows nutritional values per serving without the additional fillings.</p>
      {nutrition && (
        <div className="nutrition-table">
          <div className="nt-dt nutrition">Calories</div>
          <div className="nt-dt value">{nutrition[0].calories}</div>
          <div className="nt-dt nutrition">Carbs</div>
          <div className="nt-dt value">{nutrition[0].carbs}</div>
          <div className="nt-dt nutrition">Protein</div>
          <div className="nt-dt value">{nutrition[0].protein}</div>
          <div className="nt-dt nutrition">Fat</div>
          <div className="nt-dt value">{nutrition[0].fat}</div>
        </div>
      )}
    </section>
  )
}

export default Nutrition;