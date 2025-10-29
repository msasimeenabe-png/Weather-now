# Weather Now
Weather Now is a simple and user-friendly web application that allows users to check the current weather details of any city. It provides real-time temperature and wind speed information by integrating with the Open-Meteo API. The project is built using React and styled with plain CSS for a clean and minimal look.

## Features
- Search for any city by name
- Displays current temperature (°C)
- Displays current wind speed (km/h)
- Fetches live weather data using the Open-Meteo API
- Clean and minimal user interface built with plain CSS

## Tech Stack
- **Frontend:** React.js  
- **Styling:** Plain CSS  
- **API:** Open-Meteo API  

## How It Works
1. The user enters a city name in the search box.  
2. The application uses the Open-Meteo Geocoding API to find the latitude and longitude of that city.  
3. These coordinates are then passed to the Open-Meteo Weather API.  
4. The API returns real-time weather data, including temperature and wind speed, which are displayed on the screen.
