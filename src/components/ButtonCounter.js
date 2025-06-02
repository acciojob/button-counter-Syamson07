import React, { useState } from 'react';

function ButtonCounter() {
  // Initialize counter state
  const [count, setCount] = useState(0);

  // Handler to increment counter
  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Button Counter</h2>
      <p>Button clicked {count} {count === 1 ? 'time' : 'times'}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ButtonCounter;
