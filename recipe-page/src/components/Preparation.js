import React from 'react';

const Preparation = ({ preparations }) => {
  return (
    <section className="preparation-section rose-50-bck-color">
      <h3 className="rose-800-color outfit-600">Preparation time</h3>
      <ul className='stone-600-color outfit-400'>
        {preparations.map((prep, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: prep }}></li>
        ))}
      </ul>
    </section>
  )
}

export default Preparation;