import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Button Counter</h1>
      <p>Button clicked {count} {count === 1 ? 'time' : 'times'}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
