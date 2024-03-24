import React from 'react';
import { Card } from "react-bootstrap";


const WeatherBox = ({weather}) => {
    console.log("weather ? ", weather);

  const temperatureC =
  weather && weather.main ? (weather.main.temp - 273.15).toFixed(2) : "";
  const temperatureF =
  weather && weather.main
    ? (((weather.main.temp - 273.15) * 9) / 5 + 32).toFixed(2)
    : "";

  return (
    <div className="weather-box">
      <<Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <Card.Title>{weather?.name || '날씨를 가져오는데 실패했습니다.'}</Card.Title>
        <Card.Text className="text-success h1">
          {`${temperatureC} °C / ${temperatureF} °F`}
        </Card.Text>
        <Card.Text className="text-info text-uppercase h2">
          {weather && weather.weather[0]?.description}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    );
};

export default WeatherBox;
