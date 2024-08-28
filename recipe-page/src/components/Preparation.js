import React from 'react';

const Preparation = ({ preparations }) => {
  return (
    <section className="preparation-section">
      <h2>Preparation time</h2>
      <ul>
        {preparations.map((prep, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: prep }}></li>
        ))}
      </ul>
    </section>
  )
}

export default Preparation;