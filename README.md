****Weather App****

Overview

The Weather App is a simple and user-friendly application that provides real-time weather information for any city. It utilizes the Weatherbit API to fetch current weather data, including temperature, humidity, and wind speed. The app features a responsive design using Bootstrap and includes interactive elements for an enhanced user experience.


Features

  ⚫ Real-time Weather Data: Fetches current weather information for any city using the Weatherbit API.
  
  ⚫ Responsive Design: Built with Bootstrap for a responsive and mobile-friendly layout.
  
  ⚫ Dynamic Weather Icons: Displays weather-specific icons (rain, snow, mist, etc.) based on the current weather conditions.
  
  ⚫ Error Handling: Displays appropriate error messages for invalid city names and API rate limits.
  
  ⚫ Debounced Search: Implements debouncing to minimize unnecessary API calls.
  


Technologies Used

 ⚫ Frontend: HTML, CSS, JavaScript, Bootstrap
 
 ⚫ Backend: Node.js, Express.js, EJS
 
 ⚫ API: Weatherbit API
 
 ⚫ Environment Variables: dotenv

Setup and Installation

Clone the repository:

    git clone https://github.com/your-username/weather-app.git
cd weather-app

Install dependencies:

    npm install

Create a .env file in the root directory and add your API key and endpoint:

    API_KEY=your_weatherbit_api_key
    API_URL=https://api.weatherbit.io/v2.0/current?city=

Run the server:

    node server.js

    Open your browser and navigate to http://localhost:3000.

Folder Structure

    /weather-app
    |-- .env
    |-- server.js
    |-- /views
    |   |-- index.ejs
    |-- /public
        |-- styles.css
        |-- /images
            |-- search.png
            |-- rain.png
            |-- humidity.png
            |-- wind.png
            |-- clear.png
            |-- clouds.png
            |-- drizzle.png
            |-- mist.png
            |-- snow.png

Usage

  Enter a city name in the search box and click the search button.
  
  The app will display the current weather information for the specified city, including temperature, humidity, and wind speed.
  
  Appropriate weather icons will be shown based on the current weather conditions.
  
Contributions

Contributions are welcome! Please fork the repository and submit a pull request with your changes.
