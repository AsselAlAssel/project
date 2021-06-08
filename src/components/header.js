import React from "react";
import logo from "../images/logo.png";
import img from "../images/img.png";
import service1 from "../images/service1.png";
import service2 from "../images/service2.png";
import service3 from "../images/service3.png";

const Header = () => {
  return (
    <div className="head">
      <div className="container-header">
        <div className="head-txt">
          <img src={logo} />
          <br />
          <br />
          <h1>
            Download <br />
            Free software
          </h1>
          <h2>LANDING PAGES</h2>
          <p>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters,
          </p>
          <br />
          <button className="getStarted">GET STARTED</button>
        </div>
        <div className="head-img">
          <img src={img} width="100%" />
        </div>
      </div>

      <div className="services">
        <div className="card">
          <div>
            <img src={service1} alt="" />
          </div>
          <h1>Software</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable contentt has a more-or-less norf letter
          </p>
        </div>
        <div className="card">
          <div>
            <img src={service2} alt="" />
          </div>
          <h1>For Mobile</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable contentt has a more-or-less norf letters,
          </p>
        </div>
        <div className="card">
          <div>
            <img src={service3} alt="" />
          </div>
          <h1>For Computer</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable contentt has a more-or-less norf letter
          </p>
        </div>
      </div>
      <br/> 
    </div>
    
  );
};
export default Header;
