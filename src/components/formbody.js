import React, { useState } from "react";
import "./formbody.css";
const FormBody = () => {
  const [i, setI] = useState(0);
  const increment = () => {
    if (i < 4) {
      setI(i + 1);
    }
  };
  const decrement = () => {
    if (i > 0) {
      setI(i - 1);
    }
  };
  return (
    <div className="formbody">
      <h1>{i}</h1>
      {i > 0 && (
        <button onClick={decrement} className="decrement">
          Back
        </button>
      )}
      <button onClick={increment} className="increment">
        Next
      </button>
    </div>
  );
};
export default FormBody;
