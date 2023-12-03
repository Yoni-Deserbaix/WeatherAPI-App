# WeatherAPI-App ☀️🌦️⛅

WeatherAPI-app is an application designed to display real-time weather information for any city using the OpenWeather API. Users can input a city name, and the application will showcase its weather conditions, humidity, temperature, and wind speed. This application was designed as part of my journey in computer development, aiming to acquire and enhance my skills in web development and server-side programming.

## Features

- Input a city name to retrieve real-time weather data.
- Displays weather conditions, humidity, temperature, and wind speed for the entered city.

## Screenshots 📸

![Home Page](https://github.com/YD-SavvyDev/WeatherAPI-App/blob/main/Screenshots/visual-weather-app-homepage-laptop.png)
![Weather conditions page](https://github.com/YD-SavvyDev/WeatherAPI-App/blob/main/Screenshots/visual-weather-app-laptop.png)
![Responsive mobile](https://github.com/YD-SavvyDev/WeatherAPI-App/blob/main/Screenshots/visual_weather-app-mobile.png)

## Technologies Used 🛠️

The project was developed using the following technologies:
- HTML
- CSS
- JavaScript
- Node.js
- Express.js

The use of Node.js and Express.js facilitated the implementation of server and stock and protect the api key and enhanced my back-end skills. 🌟

## Usage

### Running the Project Locally

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/YD-SavvyDev/WeatherAPI-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd WeatherAPI-app
    ```

3. Install the express module:

    ```bash
    npm install express
    ```

4. API Key Configuration
    - Create a `config.js` file inside the `public` directory.
    - Add your OpenWeather API key to `config.js`:
      
   ![config.js code](https://github.com/YD-SavvyDev/WeatherAPI-App/blob/main/Screenshots/code-api-key.png)
   
    - Replace "YOUR API KEY" with your actual OpenWeather API key.


5. Start the application:

    ```bash
    node server.js
    ```

6. Open a web browser and access the application at `http://localhost:3000`. 🌐

## Project Structure 📁

The project structure is organized as follows:

- `index.html`: Contains the HTML structure for the WeatherAPI-app.
- `public/style.css`: Holds the CSS styles for the application's user interface.
- `public/main.js`: Includes the JavaScript code responsible for fetching and displaying weather information.
- `public/config.js`: Stores the API key for accessing the OpenWeather API.
- `server.js`: Utilizes Express to handle API requests and serve static files.
- `main-get.js`: Reads the content of index.html asynchronously using Node.js fs and util modules.

## Learning Objectives 📚

This project was an opportunity to improve the following skills:
- Improve my skills in web development and server-side programming with JavaScript and using frameworks such as Express.js.
- Using third-party APIs (OpenWeather) to retrieve real-time meteorological data.
- Managing the security of sensitive data by storing the API key in an external configuration file.

## Author 👨‍💻

This project was created by me. Feel free to reach out for any inquiries or collaboration opportunities.
