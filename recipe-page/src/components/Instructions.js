import React from 'react';

const Instructions = ({ instructions }) => {
  return (
    <section className="instructions-section">
      <h2 className='young-serif-regular rose-800-color'>Instructions</h2>
      <ol>
        {instructions.map((instruction, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: instruction }}></li>
        ))}
      </ol>
    </section>
  )
}

export default Instructions;