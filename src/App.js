import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  // State
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useEffect
  useEffect(() => {
    console.log("App Loaded");
  }, []);

  // Functions
  const increment = () => {
    setCount(count + 1);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="app">

      {/* Header */}
      <div className="header">
        <h1>My React App</h1>
      </div>

      {/* Main Layout */}
      <div className="main">

        {/* Left Sidebar */}
        <div className="sidebar">
          <h3>Menu</h3>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        {/* Right Content */}
        <div className="content">

          {/* Counter */}
          <div className="card">
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increase</button>
          </div>

          {/* Input */}
          <div className="card">
            <input
              type="text"
              placeholder="Enter text"
              value={text}
              onChange={handleChange}
            />
            <p>You typed: {text}</p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>Krishna 24BCE0592</p>
      </div>

    </div>
  );
}

export default App;