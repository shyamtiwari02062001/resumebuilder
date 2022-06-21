import React, { useContext } from "react";
import ResumeDetailsContext from "../indexContext";
import "./formbody.css";
import Personal from "./personal";
const FormBody = () => {
  const {
    id,
    setId,
    firstName,
    lastName,
    mobileNumber,
    email,
    dob,
    interest,
    address,
    languages,
  } = useContext(ResumeDetailsContext);
  let count = 0;
  const increment = (event) => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      mobileNumber !== "" &&
      email !== "" &&
      dob !== "" &&
      interest !== "" &&
      address !== "" &&
      languages !== ""
    ) {
      count = 0;
    } else {
      count = 1;
    }
    if (id < 4 && count === 0) {
      event.preventDefault();
      setId(id + 1);
    }
  };
  const decrement = () => {
    if (id > 0) {
      setId(id - 1);
    }
  };
  return (
    <form className="formbody">
      {id === 0 && <Personal />}
      <div className="buttonbody">
        {id > 0 && (
          <button onClick={decrement} className="decrement">
            Back
          </button>
        )}
        <button type={"submit"} onClick={increment} className="increment">
          Next
        </button>
      </div>
    </form>
  );
};
export default FormBody;
