import { useContext, useState } from "react";
import "../css/input.css";
import img from "./images/user.png";
import ResumeDetailsContext from "../indexContext";
import AdditionalForm from "./additionalform";
const Additional = () => {
  const {
    career,
    setCareer,
    skills,
    setSkills,
    image,
    setImage,
    detailTitle,
    setDetailTitle,
    detail,
    setDetail,
  } = useContext(ResumeDetailsContext);
  const [count, setCount] = useState(
    detailTitle.length === 0 ? 1 : detailTitle.length
  );

  const increment = (event) => {
    if (
      (detailTitle[count - 1] !== undefined &&
        detail[count - 1] !== undefined) ||
      count === 0
    ) {
      event.preventDefault();
      setCount(count + 1);
    }
  };
  const decrement = (event) => {
    if (detailTitle.length === count || detail.length === count) {
      const newTitle = Array.from(detailTitle);
      if (newTitle.length === count) {
        var detailTitleValue = newTitle.indexOf(newTitle[count - 1]);
        newTitle.splice(detailTitleValue, 1);
      }
      setDetailTitle(newTitle);
      const newDetail = Array.from(detail);
      if (newDetail.length === count) {
        var detailValue = newDetail.indexOf(newDetail[count - 1]);
        newDetail.splice(detailValue, 1);
      }
      setDetail(newDetail);
      if (count > 1) {
        event.preventDefault();
        setCount(count - 1);
      }
    }
  };
  return (
    <div>
      <h1 className="header">Additional Details</h1>

      <div className="look">
        <div style={{ flex: 9 }}>
          <label className="label">Career Objective</label>
          <textarea
            className="textarea"
            value={career}
            placeholder="Enter your career objective"
            onChange={(event) => setCareer(event.target.value)}
            required
          />
          <br />
          <br />
          <label className="label">Skills</label>
          <br />
          <textarea
            className="textarea"
            value={skills}
            placeholder="Enter your skills separated with comma"
            onChange={(event) => setSkills(event.target.value)}
            required
          />
        </div>
        <div style={{ flex: 1, marginRight: "10px" }}>
          <label style={{ cursor: "pointer" }}>
            <div className="imageBody">
              {image === "" ? (
                <img alt="" src={img} className="images" />
              ) : (
                <img alt="" className="images" src={image} />
              )}
            </div>
            <input
              style={{ display: "none" }}
              title="Select your image"
              type={"file"}
              required
              onChange={(event) =>
                setImage(URL.createObjectURL(event.target.files[0]))
              }
            />
          </label>
        </div>
      </div>
      {[...Array(count)].map((e, i) => (
        <AdditionalForm key={i} id={i + 1} />
      ))}
      <div style={{ display: "flex", justifyContent: "right", margin: "5px" }}>
        <button
          onClick={(event) => {
            decrement(event);
          }}
          className="decrementButton"
        >
          Delete
        </button>
        <button
          onClick={(event) => increment(event)}
          className="incrementButton"
        >
          Add
        </button>
      </div>
    </div>
  );
};
export default Additional;
