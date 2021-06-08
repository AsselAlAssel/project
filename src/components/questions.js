import React from "react";
import "../style/style-questions.scss";
import ask from "../images/ask.jpg";
import Ques from "./ques";

let arr = [];
for (let index = 0; index < 5; index++) {
  arr[index] = index + 1;
}
console.log(arr);
let ques = arr.map(() => {
  return (
    <Ques
      question="Why is simply dummy text of the printing my text of the"
      desk="It is a long established fact that a reader will 
      be distracted by the readable content of a page when 
      looking at its ore-or-less normal distribution of letters, 
      as opposed to using ' Content here, content here',
       making it look like readable English Many desktop
        publishing packages"
    />
  );
});

const Questions = () => {
  return (
    <div className="questions-div">
      <div className="ques-title">
        <h1>
          Frequently Asked <span>Questions</span>
        </h1>
      </div>
      <div className="question">
        <div className="question-img">
          <img src={ask} alt="" />
        </div>
        <div className="question-text">
         {ques}
        </div>
      </div>
    </div>
  );
};
export default Questions;
