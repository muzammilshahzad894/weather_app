import React from "react";
import { Link } from "react-router-dom";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.jpg";

const Home = () => {
  return (
    <div className="container-fluid main_header">
      <div className="row">
        <div className="col-md-10 col-12 mx-auto">
          <div className="row">
            {/* <!-- left side div --> */}
            <div className="col-md-6 col-12 main_header_left">
              <p>Welcome to weather app</p>
              <h1>
                Get The Largest <span className="txt_clr"> Weather </span> Info
                Of Your City
              </h1>
              <Link to="/weather">
                <button>check now</button>
              </Link>
            </div>
            {/* <!-- right side div --> */}
            <div className="col-md-6 col-12 main_header_right">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="w-100" src={slide4} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-100" src={slide2} alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="w-100" src={slide3} alt="Third slide" />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
