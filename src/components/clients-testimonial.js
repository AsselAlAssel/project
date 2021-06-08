import React from "react";
import "../style/style-client.scss";
import Slider from "./client-slider"
const Clinet = () => {
  return (
    <div className="client">
      <div className="title">
        <h1>
          Clients <span>Testimonial</span>
        </h1>
        <p>
          use a passa of Lorem Ipsum, you need to be sure there isn't anything
          embarrassing hidden in the<br/> middle of text. All the Lorem Ipsum
          generators on the
        </p>
      </div>
      <Slider/>
    </div>
  );
};
export default Clinet;


