// Select HTML5 element
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const backButton = document.getElementById("backbtn");

const cityElement = document.getElementById("city");
const conditions = document.getElementById("conditions");
const temperature = document.getElementById("temperature");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const img = document.querySelector("img");

// Hide the back button initially
backButton.style.display = "none";

// Hide city values by default
cityElement.style.display = "none";

// Event listener for search button click
searchButton.addEventListener("click", () => {
  event.preventDefault();

  if (searchInput.value === "") {
    // Display message when no city is entered
    cityElement.style.display = "block";
    cityElement.innerHTML = "Please enter a city name";
    conditions.innerHTML = "";
    temperature.innerHTML = "";
    humidity.innerHTML = "";
    windSpeed.innerHTML = "";
    weatherIcon.setAttribute("src", ""); // Clear the image path
  } else {
    // Construct URL for weather API call
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=${API_KEY}`;

    // Fetch weather data from the API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Determine the weather icon based on current weather condition
        let weatherIconId;
        switch (data.weather[0].main.toLowerCase()) {
          case "clear":
            weatherIconId = "clearIcon";
            break;
          case "clouds":
            weatherIconId = "cloudIcon";
            break;
          case "haze":
            weatherIconId = "hazeIcon";
            break;
          case "rain":
            weatherIconId = "rainIcon";
            break;
          case "snow":
            weatherIconId = "snowIcon";
            break;
          case "thunderstorm":
            weatherIconId = "stormIcon";
            break;
          default:
            weatherIconId = ""; // If no match found
        }

        // Update UI with weather data
        cityElement.style.display = "block";
        cityElement.innerHTML = `${data.name}, ${data.sys.country}`;
        conditions.innerHTML = `${data.weather[0].description}`;
        temperature.innerHTML = `<b>🌡️Temperature: ${data.main.temp}°C</b>`;
        humidity.innerHTML = `<b>💧 Humidity: ${data.main.humidity}%</b>`;
        windSpeed.innerHTML = `<b>💨 Wind Speed: ${data.wind.speed} m/s</b>`;

        // Display the weather icon
        const weatherIcon = document.getElementById(weatherIconId);
        weatherIcon.style.display = "block";

        // Update button visibility
        searchButton.style.display = "none";
        searchInput.style.display = "none";
        backButton.style.display = "block";

        // Event listener for back button click
        backButton.addEventListener("click", () => {
          window.location.reload(); // Refresh the page
        });
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        // Display error message when city is not found
        cityElement.style.display = "block";
        cityElement.innerHTML = "City not found";
        conditions.innerHTML = "";
        temperature.innerHTML = "";
        humidity.innerHTML = "";
        windSpeed.innerHTML = "";

        // Hide weather icon on error
        const weatherIcon = document.getElementById("weatherIcon");
        weatherIcon.setAttribute("src", ""); // Clear the image path
      });
  }
});
