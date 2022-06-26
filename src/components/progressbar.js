import "../css/progressbar.css";
import personal from "./images/personal.png";
import academic from "./images/resume.png";
import additional from "./images/additional.png";
import preview from "./images/preview.png";
import { useContext } from "react";
import ResumeDetailsContext from "../indexContext";
const Progress = () => {
const {id} =useContext(ResumeDetailsContext);

  return (
    <div className="body">
      {id >= 0 ? (
        <img src={personal} alt="" className="changeImage" />
      ) : (
        <img src={personal} alt="" className="image" />
      )}
      {id >= 1 ? (
        <>
          <div className="changeLine" />
          <img src={academic} alt="" className="changeImage" />
        </>
      ) : (
        <>
          <div className="line" />
          <img src={academic} alt="" className="image" />
        </>
      )}
      {id >= 2 ? (
        <>
          {" "}
          <div className="changeLine" />
          <img src={additional} alt="" className="changeImage" />
        </>
      ) : (
        <>
          {" "}
          <div className="line" />
          <img src={additional} alt="" className="image" />
        </>
      )}
      {id >= 3 ? (
        <>
          <div className="changeLine" />
          <img src={preview} alt="" className="changeImage" />
        </>
      ) : (
        <>
          <div className="line" />
          <img src={preview} alt="" className="image" />
        </>
      )}
    </div>
  );
};
export default Progress;
