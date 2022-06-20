import "./progressbar.css";
import personal from "./images/personal.png";
import academic from "./images/resume.png";
import additional from "./images/additional.png";
import preview from "./images/preview.png";
const i = 0;
const Progress = () => {
  return (
    <div className="body">
      {i >= 0 ? (
        <img src={personal} alt="" className="changeImage" />
      ) : (
        <img src={personal} alt="" className="image" />
      )}
      {i >= 1 ? (
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
      {i >= 2 ? (
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
      {i >= 3 ? (
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
