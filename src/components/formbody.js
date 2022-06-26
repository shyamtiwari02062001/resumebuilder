import React, { useContext } from "react";
import ResumeDetailsContext from "../indexContext";
import "../css/formbody.css";
import Personal from "./personal";
import Academic from "./academic";
import Additional from "./additional";
import Print from "./print";
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
    degree,
    board,
    year,
    percentage,
    career,
    skills,
    image,
    detailTitle,
    detail,
  } = useContext(ResumeDetailsContext);
  let page1 = 0,
    page2 = 0,
    page3 = 0;
  const increment = (event) => {
    if (
      id === 0 &&
      (firstName === "" ||
        lastName === "" ||
        mobileNumber === "" ||
        email === "" ||
        dob === "" ||
        interest === "" ||
        address === "" ||
        languages === "")
    ) {
      page1 = 1;
    } else if (id === 1) {
      for (let i = 0; i < (degree.length === 0 ? 1 : degree.length); i++) {
        if (
          degree[i] === undefined ||
          board[i] === undefined ||
          year[i] === undefined ||
          percentage[i] === undefined ||
          degree[i] === "" ||
          board[i] === "" ||
          year[i] === "" ||
          percentage[i] === ""
        ) {
          page2 = 1;
        }
      }
    } else if (id === 2) {
      for (
        let i = 0;
        i < (detailTitle.length === 0 ? 1 : detailTitle.length);
        i++
      ) {
        if (
          detailTitle[i] === undefined ||
          detail[i] === undefined ||
          detailTitle[i] === "" ||
          detail[i] === "" ||
          career === "" ||
          image === "" ||
          skills === ""
        ) {
          page3 = 1;
        }
      }
    }
    if (id <= 4 && page1 === 0 && page2 === 0 && page3 === 0) {
      event.preventDefault();
      setId(id + 1);
    }
  };
  const decrement = (event) => {
    if (id > 0) {
      event.preventDefault();
      setId(id - 1);
    }
  };
  return (
    <form className="formbody">
      {id === 0 && <Personal />}
      {id === 1 && <Academic />}
      {id === 2 && <Additional />}
      {id === 3 && <Print />}
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
