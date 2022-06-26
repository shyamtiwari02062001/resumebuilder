import { useContext } from "react";
import "../css/input.css";
import ResumeDetailsContext from "../indexContext";
const AcademicForm = (props) => {
  const {
    degree,
    setDegree,
    board,
    setBoard,
    year,
    setYear,
    percentage,
    setPercentage,
  } = useContext(ResumeDetailsContext);
  return (
    <div>
      <h3>Degree Number : {props.id}</h3>
      <div className="look">
        <div className="flex">
      <label className="label">Degree Name </label>
      <br />
      <input
        key={`degree${props.id}`}
        type={"text"}
        placeholder="Enter The Degree Name"
        className="input"
        value={degree[props.id - 1] === undefined ? "" : degree[props.id - 1]}
        onChange={(event) => {
          const newDegeree = Array.from(degree);
          newDegeree[props.id - 1] = event.target.value;
          setDegree(newDegeree);
        }}
        required
      />
      </div>

      <div className="flex">
      <label className="label">Board/University Name</label>
      <br />
      <input
        key={`board${props.id}`}
        type={"text"}
        placeholder="Enter The University/College/School Name"
        className="input"
        value={board[props.id - 1] === undefined ? "" : board[props.id - 1]}
        onChange={(event) => {
          const newBoard = Array.from(board);
          newBoard[props.id - 1] = event.target.value;
          setBoard(newBoard);
        }}
        required
      />
      </div>
      </div>
      <div className="look">
        <div className="flex">
      <label className="label">Year/Session</label>
      <br />
      <input
        key={`year${props.id}`}
        type={"text"}
        placeholder="Enter The Passing Year/Course Session"
        className="input"
        value={year[props.id - 1] === undefined ? "" : year[props.id - 1]}
        onChange={(event) => {
          const newYear = Array.from(year);
          newYear[props.id - 1] = event.target.value;
          setYear(newYear);
        }}
        required
      />
     </div>

     <div className="flex">
      <label className="label">Percentage/CGPA</label>
      <br />
      <input
        key={`percentage${props.id}`}
        type={"text"}
        placeholder="Enter The Percentage/CGPA scored"
        className="input"
        value={
          percentage[props.id - 1] === undefined ? "" : percentage[props.id - 1]
        }
        onChange={(event) => {
          const newPercentage = Array.from(percentage);
          newPercentage[props.id - 1] = event.target.value;
          setPercentage(newPercentage);
        }}
        required
      />
      </div>
      </div>
    </div>
  );
};
export default AcademicForm;
