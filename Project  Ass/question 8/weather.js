function getWeather() {
    var cityInput = document.getElementById("cityInput").value;

    if (!cityInput) {
        alert("Please enter a city");
        return;
    }

    // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
    var apiKey = '6776985756c801e63028a7fe5e0e504c';
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    var weatherInfo = document.getElementById("weather-info");

    if (data.cod === '404') {
        weatherInfo.innerHTML = `<p>${data.message}</p>`;
    } else {
        var cityName = data.name;
        var temperature = data.main.temp;
        var weatherDescription = data.weather[0].description;

        weatherInfo.innerHTML = `
                    <h3>${cityName}</h3>
                    <p>Temperature: ${temperature} &deg;C</p>
                    <p>Weather: ${weatherDescription}</p>
                `;
    }
}
