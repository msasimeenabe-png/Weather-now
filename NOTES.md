# Project Notes — Weather Now

## Step 1: Project Overview
The objective of this project is to develop a simple and user-friendly weather application that displays the current temperature and wind speed for any given city. The application is built using React and styled with plain CSS.

## Step 2: Tools and Technologies
- React.js – for building the user interface
- Plain CSS – for styling the components
- Open-Meteo API – for fetching weather data based on geographical coordinates

## Step 3: Functionality
1. The user enters a city name in the input field.
2. The application uses the Open-Meteo Geocoding API to convert the city name into latitude and longitude coordinates.
3. These coordinates are then passed to the Open-Meteo Weather API to retrieve real-time weather information.
4. The temperature (in Celsius) and wind speed (in km/h) are displayed on the screen.

## Step 4: Implementation Details
- Implemented using React functional components and the `useState` hook to handle input and API responses.
- Used the `fetch()` method to make asynchronous API calls.
- Displayed results dynamically once the API data is received.
- Designed a simple and clean layout using plain CSS for easy readability and user experience.

## Step 5: Testing
The application was tested with several cities such as Chennai, Delhi, Dubai, and New York to ensure that it accurately displays temperature and wind speed data.

## Step 6: Challenges
- Managing errors for invalid city names or empty inputs.
- Handling asynchronous operations and state updates properly.
- Maintaining a clean layout using only plain CSS.

## Step 7: Result
The project successfully provides real-time temperature and wind speed details for any city. It demonstrates the integration of external APIs with React and offers a simple and effective user interface.

## Step 8: Deployment
The application is deployed on CodeSandbox and can be accessed using the following link:  
[https://codesandbox.io/p/sandbox/awesome-roentgen-yj7xkx](https://codesandbox.io/p/sandbox/awesome-roentgen-yj7xkx)

## Developed by
**Sasimeena M**  
