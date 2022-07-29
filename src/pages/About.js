import React from "react";
import { Link } from "react-router-dom";
import about from "../images/about.png";

const About = () => {
  return (
    <div className="container-fluid main_header">
      <div className="row">
        <div className="col-md-10 col-12 mx-auto">
          <div className="row">
            {/* <!-- left side div --> */}
            <div className="col-md-6 col-12 main_header_right">
              <img className="w-100 image-fluid" src={about} alt="about img" />
            </div>
            {/* <!-- right side div --> */}
            <div className="col-md-6 col-12 main_header_left">
              <p>Welcome to weather app</p>
              <h1>
                i am a <span className="txt_clr"> full stack developer </span>
                and a free lancer
              </h1>
              <Link to="/weather">
                <button>check now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
