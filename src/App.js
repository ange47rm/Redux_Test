import { useState } from 'react';
import "./styles.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1> The count is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
}

export default App;
