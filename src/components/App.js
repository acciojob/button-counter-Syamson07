import React, { useState } from 'react';

function App() {
  // Step 1: Initialize state
  const [count, setCount] = useState(0);

  // Step 2: Handle button click
  const handleClick = () => {
    setCount(count + 1);
  };

  // Step 3: Display the UI
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Button Counter</h1>
      <p>Button clicked {count} {count === 1 ? 'time' : 'time'}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
