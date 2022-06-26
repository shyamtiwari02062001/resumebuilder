import { useContext } from "react";
import "../css/input.css";
import ResumeDetailsContext from "../indexContext";
const AdditionalForm = (props) => {
  const { 
    detailTitle,
    setDetailTitle,
    detail,
    setDetail } =
    useContext(ResumeDetailsContext);
    console.log(detail)
  return (
    <div>
      <h3>Detail {props.id}</h3>
      <input
      required
        className="input2"
        value={detailTitle[props.id-1] === undefined ? "" : detailTitle[props.id-1]}
        onChange={(event) => {
          const newDegeree = Array.from(detailTitle);
          newDegeree[props.id - 1] = event.target.value;
          setDetailTitle(newDegeree);
        }}
        placeholder="Enter the title of the detail"
      />
      <textarea
      required
        className="textarea"
        value={detail[props.id-1] === undefined ? "" : detail[props.id-1]}
        onChange={(event) => {
          const newDegeree = Array.from(detail);
          newDegeree[props.id - 1] = event.target.value;
          setDetail(newDegeree);
        }}
        placeholder="Enter the details"
      />
    </div>
  );
};
export default AdditionalForm;
