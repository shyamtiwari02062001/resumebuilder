import { useContext, useState } from "react";
import "../css/input.css";
import ResumeDetailsContext from "../indexContext";
import AcademicForm from "./academicform";
const Academic = () => {
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
  const [count, setCount] = useState(degree.length === 0 ? 1 : degree.length);

  const increment = (event) => {
    if (
      (degree[count - 1] !==undefined &&
        board[count - 1] !==undefined &&
        year[count - 1] !== undefined &&
        percentage[count - 1] !== undefined) ||
      count === 0
    ) {
      event.preventDefault();
      setCount(count + 1);
    }
  };
  const decrement = (event) => {
    if (
      degree.length === count ||
      year.length === count ||
      percentage.length === count ||
      board === count
    ) {
      const newBoard = Array.from(board);
      if(newBoard.length===count){
        var boardValue=newBoard.indexOf(newBoard[count-1]);
        newBoard.splice(boardValue,1);
      }
      setBoard(newBoard);
      const newDegree = Array.from(degree);
      if(newDegree.length===count){
        var degreeValue=newDegree.indexOf(newDegree[count-1]);
        newDegree.splice(degreeValue,1); 
      }
      setDegree(newDegree);
      const newYear = Array.from(year);
      if(newYear.length===count){
        var yearValue=newYear.indexOf(newYear[count-1]);
        newYear.splice(yearValue,1); 
      }
      setYear(newYear);
      const newPercentage = Array.from(percentage);
      if(newPercentage.length===count){
        var percentageValue=newPercentage.indexOf(newPercentage[count-1]);
        newPercentage.splice(percentageValue,1); 
      }
      setPercentage(newPercentage);
    }
    if (count > 1) {
      event.preventDefault();
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h1 className="header">Academic Details</h1>
      {[...Array(count)].map((e, i) => (
        <AcademicForm key={i} id={i + 1} />
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
export default Academic;
