# WeatherAPI-App
WeatherAPI-app is an application designed to display real-time weather information for any city using the OpenWeather API. Users can input a city name, and the application will showcase its weather conditions, humidity, temperature, and wind speed.
 Cette application a été conçue dans le cadre de mon parcours en développement informatique, visant à acquérir et améliorer mes compétences en développement web et en programmation côté serveur.

## Features

- Input a city name to retrieve real-time weather data.
- Displays weather conditions, humidity, temperature, and wind speed for the entered city.


## Screenshots
![Home Page](https://github.com/YD-SavvyDev/WeatherAPI-App/blob/main/Screenshots/visual-weather-app-homepage-laptop.png)
![Weather conditions page](https://github.com/YD-SavvyDev/WeatherAPI-App/blob/main/Screenshots/visual-weather-app-laptop.png)
![Responsive mobile](https://github.com/YD-SavvyDev/WeatherAPI-App/blob/main/Screenshots/visual_weather-app-mobile.png)


## Technologies Used

The project was developed using the following technologies:
- HTML
- CSS
- JavaScript
- Node.js
- Express.js

  The use of Node.js and Ewpress.js facilitated the implementation of server and stock and protect the api key and enhanced my back-end skills. ✨



## Usage

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

4. Create a `config.js` file inside the `public` directory with the following code:

   ![config.js code](https://github.com/YD-SavvyDev/WeatherAPI-App/blob/main/Screenshots/code-api-key.png)

5. Start the application:

    ```bash
    node server.js
    ```

6. Open a web browser and access the application at `http://localhost:3000`.


## Project Structure

The project structure is organized as follows:

- `index.html`: Contains the HTML structure for the WeatherAPI-app.
- `style.css`: Holds the CSS styles for the application's user interface.
- `main.js`: Includes the JavaScript code responsible for fetching and displaying weather information.
- `server.js`: Utilizes Express to handle API requests and serve static files.
-  `main-get.js` reads the content of index.html asynchronously using Node.js fs and util modules.
- `public/config.js`: Stores the API key for accessing the OpenWeather API.



## Learning Objectives

This project was an opportunity to improve the following skills:
- improve my skills in web development and server-side programming with JavaScript and using frameworks such as Express.js.
- - Utilisation d'API tiers (OpenWeather) pour récupérer des données météorologiques en temps réel.
- Gestion de la sécurité des données sensibles en stockant la clé API dans un fichier de configuration externe.

## Author 

This project was created by me. Feel free to reach out for any inquiries or collaboration opportunities.

