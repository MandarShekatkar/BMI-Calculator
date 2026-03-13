import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  const calculateBmi = (e) => {
    e.preventDefault();

    const w = Number(weight);
    const h = Number(height);

    if (w <= 0 || h <= 0) {
      alert("Please Enter a Valid Height & Weight");
      return;
    }

    const result = w / (h * h);
    setBmi(result.toFixed(1));

    if (result < 18.5) {
      setMessage("Underweight");
      setColor("#facc15");
    } else if (result >= 18.5 && result < 25) {
      setMessage("Normal Weight");
      setColor("#22c55e");
    } else if (result >= 25 && result < 30) {
      setMessage("Overweight");
      setColor("#fb923c");
    } else {
      setMessage("Obese");
      setColor("#ef4444");
    }
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setMessage("");
    setColor("");
  };

  return (
    <div className="container">
      <form onSubmit={calculateBmi}>
        <label>Weight (KG)</label>
        <input
          type="number"
          placeholder="Enter weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <label>Height (Meters)</label>
        <input
          type="number"
          step="0.01"
          placeholder="Enter height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <div className="btn-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={reset}>
            Reset
          </button>
        </div>

        <div className="result">
          {bmi && <h2>BMI: {bmi}</h2>}
          {message && <p style={{ color }}>{message}</p>}
        </div>
      </form>
    </div>
  );
};

export default App;