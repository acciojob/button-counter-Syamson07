import React, { useState } from 'react';

function ButtonCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Button Counter</h2>
      <p>Button clicked {count} times</p> {/* ✅ Matches test */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ButtonCounter;
