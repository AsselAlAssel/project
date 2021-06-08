import React from "react";
import plus from "../images/plus.png"
const Ques = (props) => {
  return (
    <div className="ques-text plus ">
        <div className="div-txt">
        <span className="theText">{props.question}</span>
        <span className="logo" id="logo">+</span>
        </div>
     
      <p>{props.desk}</p>
   
    </div>
  );
};
export default Ques;
