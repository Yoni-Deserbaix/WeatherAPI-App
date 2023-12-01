const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const backButton = document.getElementById("backbtn");

const cityElement = document.getElementById("city");
const conditions = document.getElementById("conditions");
const temperature = document.getElementById("temperature");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const img = document.querySelector("img");

backButton.style.display = "none"; //

// hide city values by default
cityElement.style.display = "none";
searchButton.addEventListener("click", () => {
  event.preventDefault();

  if (searchInput.value === "") {
    cityElement.style.display = "block";
    cityElement.innerHTML = "Please enter a city name";
    conditions.innerHTML = "";
    temperature.innerHTML = "";
    humidity.innerHTML = "";
    windSpeed.innerHTML = "";
    weatherIcon.setAttribute("src", ""); // Vider le chemin de l'image
  } else {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Récupérer l'élément de l'icône météorologique en fonction de la condition actuelle
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
            weatherIconId = ""; // Si aucune correspondance n'est trouvée
        }

        // Utilisation des données pour mettre à jour l'interface utilisateur
        cityElement.style.display = "block";
        cityElement.innerHTML = `${data.name}, ${data.sys.country}`;
        conditions.innerHTML = `${data.weather[0].description}`;
        temperature.innerHTML = `<b>🌡️Temperature: ${data.main.temp}°C</b>`;
        humidity.innerHTML = `<b>💧 Humidity: ${data.main.humidity}%</b>`;
        windSpeed.innerHTML = `<b>💨 Wind Speed: ${data.wind.speed} m/s</b>`;

        const weatherIcon = document.getElementById(weatherIconId);
        weatherIcon.style.display = "block"; // Afficher l'icône météorologique correspondante

        searchButton.style.display = "none";
        searchInput.style.display = "none";
        backButton.style.display = "block";
        backButton.addEventListener("click", () => {
          window.location.reload(); // Re
        });
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        cityElement.style.display = "block";
        cityElement.innerHTML = "City not found";
        conditions.innerHTML = "";
        temperature.innerHTML = "";
        humidity.innerHTML = "";
        windSpeed.innerHTML = "";
        // En cas d'erreur, masquer l'icône météorologique
        const weatherIcon = document.getElementById("weatherIcon");
        weatherIcon.setAttribute("src", ""); // Vider le chemin de l'image
      });
  }
});
