import React from "react";

const WeatherIcon = ({ code }) => {
    const iconUrl = `http://openweathermap.org/img/wn/${code}.png`;

    return (
        <img src={iconUrl} alt="Weather Icon" />
    )
}

export default WeatherIcon;