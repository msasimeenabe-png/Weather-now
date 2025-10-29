import React, { useState } from "react";
import "./styles.css";

// Shows temperature and wind speed for any city

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  // Function to get weather
  const getWeather = async () => {
    setError("");
    setWeather(null);

    if (city.trim() === "") {
      setError("Please enter a city name");
      return;
    }

    try {
      // Get latitude and longitude
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        setError("City not found. Try another one.");
        return;
      }

      const { latitude, longitude, name, country } = data.results[0];

      // Get weather data
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        name,
        country,
        temp: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed,
      });
    } catch {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="app">
      <h1>🌤️ Weather Now</h1>
      <p className="tag">Quick weather info for you</p>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && getWeather()}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="result">
          <h2>
            {weather.name}, {weather.country}
          </h2>
          <p>🌡️ Temperature: {weather.temp}°C</p>
          <p>💨 Wind Speed: {weather.wind} km/h</p>
        </div>
      )}
    </div>
  );
}

export default App;
