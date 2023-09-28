import React, { useState, useEffect, Fragment } from "react";
// import displayObs from "./displayObs.js";

const FetchObservations = () => {
  const url = "/json/observations.json";
  const [weather, setWeather] = useState([]);

  const getCurrent = async () => {
    const response = await fetch(url);
    const weather = await response.json();
    // const { observations } = UseFetch(url);
    console.log(weather);
    setWeather(weather);
    console.log("observation data received ...");
    // removed await
    // const section = displayObs(observations.metar.response[0]);
  };
  useEffect(() => {
    getCurrent();

    const interval = setInterval(() => {
      getCurrent();
    }, 600000);

    return () => clearInterval(interval);
  }, []); /* Must make sure to run dependency array [], otherwise infinite loop ...  */
  // hideLoading();
  if (weather.length === 0) return null;
  return (
    <>
      <h4>{weather.metar.response[0].id}</h4>
      <article className="cocktail">
        <h3>{weather.metar.response[0].ob.weatherPrimary}</h3>
      </article>
    </>
  );
};

export default FetchObservations;
