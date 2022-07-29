import React, { useState } from "react";
import ShowWeather from "./ShowWeather";

const Main = () => {
  const [inputVal, setInputVal] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputVal === "") {
      setError("Plz write the name befor you search");
    } else {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=69b3c10124fb84d7acd848d85fd1aa50`;
      const response = await fetch(url);
      const data = await response.json(response);
      const arrData = [data];
      if (arrData[0].cod === 200) {
        setError("");
        setWeatherData(arrData);
      } else {
        setError("Plz enter the city name properly");
      }
    }
  };

  return (
    <div className="container-fluid main_header">
      <div className="row">
        <div className="col-md-10 col-12 mx-auto">
          <div className="main_content temp_form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="cityName"
                placeholder="Enter your city name"
                autoComplete="off"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
              <input type="submit" value="Search" id="submitBtn" />
            </form>
          </div>
          <ShowWeather weatherData={weatherData} error={error} />
        </div>
      </div>
    </div>
  );
};

export default Main;
