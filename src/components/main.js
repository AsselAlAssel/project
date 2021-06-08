import React from "react";
import "../style/style-main.scss";
import why1 from "../images/why1.png";
import why2 from "../images/why2.png";
const Main = () => {
  return (
    <div className="main">
      <h1>
        Who <span>We Are</span>
      </h1>
      <div className="container">
        <div className="main-img">
          <img src={why1} alt="" />
        </div>
        <div className="main-text">
          <span>MIDDLE OF TEXT.</span>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat
          </p>
          <button className="mian-btn-read-more">READ MORE</button>
        </div>
      </div>
      <div className="container">
        <div className="main-img">
          <img src={why2} alt="" />
        </div>
        <div className="main-text">
          <span>MIDDLE OF TEXT.</span>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat
          </p>
          <button className="mian-btn-read-more">READ MORE</button>
        </div>
      </div>
    </div>
  );
};
export default Main;
