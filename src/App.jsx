import React, { useState } from "react";
import axios from "axios";
import './App.css';
import WeatherIcon from "./WeatherIcon";

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');
  const [error, setError] = useState('');

  const apiKey = "5f3a7a8abea505bf74a17539a63320b2";
  console.log(apiKey)
  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      setWeather(response.data);
      setError('');
    } catch (err) {
      setWeather(null);
      setError("City not found, Please try again.");
    }


  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl mb-4">Weather App</h1>
        <input
          type="text"
          placeholder="Enter City"
          className="p-2 border rounded w-full mb-4"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 "
          onClick={getWeather}
        ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
        {weather && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-1">{weather.name}</h2>
            <WeatherIcon code={weather.weather[0].icon} />
            <p>{weather.weather[0].description}</p>
            <p className="text-2xl font-bold mt-2">{weather.main.temp}°C</p>
          </div>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>

    </div>
  )
}








export default App;