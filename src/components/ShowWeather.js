import React, { useEffect, useState } from "react";

const ShowWeather = ({ weatherData, error }) => {
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [output, setOutput] = useState("Get Output Here");
  const [tempRealVal, setTempRealVal] = useState("");
  const [weatherIcon, setWeatherIcon] = useState(
    <i className="fa fa-cloud" aria-hidden="true"></i>
  );

  const getCurrentDay = () => {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let date = new Date();
    let curDay = weekday[date.getDay()];
    setDay(curDay);
  };
  const getCurrentDate = () => {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Noc",
      "Dec",
    ];

    var now = new Date();
    var month = months[now.getMonth()];
    var dates = now.getDate();
    setDate(dates + " " + month);
  };

  useEffect(() => {
    getCurrentDay();
    getCurrentDate();
    if (error !== "") {
      setOutput(error);
      setTempRealVal("");
    } else {
      if (weatherData.length) {
        setOutput(weatherData[0].name + ", " + weatherData[0].sys.country);
        setTempRealVal(weatherData[0].coord.lat);
        const tempMood = weatherData[0].weather[0].main;
        if (tempMood === "Clear") {
          setWeatherIcon(
            <i class="fas fa-sun" style={{ color: "#eccc68" }}></i>
          );
        } else if (tempMood === "Clouds") {
          setWeatherIcon(
            <i class="fas fa-cloud" style={{ color: "#f1f2f6" }}></i>
          );
        } else if (tempMood === "Rain") {
          setWeatherIcon(
            <i class="fas fa-cloud-rain" style={{ color: "#a4b0be" }}></i>
          );
        } else {
          setWeatherIcon(
            <i class="fas fa-sun" style={{ color: "#eccc68" }}></i>
          );
        }
      }
    }
  }, [weatherData, error]);

  return (
    <div className="tempInformation">
      <div className="top_layer">
        <p id="day">{day}</p>
        <p id="today_data">{date}</p>
      </div>
      <div className="main_layer">
        <p id="city_name">{output}</p>
        {tempRealVal !== "" && (
          <div className="middle_layer">
            <p id="temp">
              <span id="temp_real_value">{tempRealVal}</span>
              <span>
                <sup>o</sup>C
              </span>
            </p>
            <p id="temp_status">{weatherIcon}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowWeather;
