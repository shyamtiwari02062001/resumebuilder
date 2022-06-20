import React, { useState } from "react";
import "./formbody.css";
import Personal from "./personal";
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
    <form className="formbody">
      <Personal />
      <div className="buttonbody">
        <h1>{i}</h1>
        {i > 0 && (
          <button type="submit" onClick={decrement} className="decrement">
            Back
          </button>
        )}
        <button type="submit" onClick={increment} className="increment">
          Next
        </button>
      </div>
    </form>
  );
};
export default FormBody;
