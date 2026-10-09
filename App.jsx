import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="page">
      <div className="counter">
        <h1>React Counter</h1>
        <div className="value">{count}</div>

        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </main>
  );
}

export default App;
