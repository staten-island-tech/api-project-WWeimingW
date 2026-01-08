const app = {
  form: document.getElementById("weather-form"),
  input: document.getElementById("city-input"),
  output: document.getElementById("weather-output"),

  async getCity(cityName) {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
    );

    if (!response.ok) {
      throw new Error("City lookup failed try again later");
    }
    const data = await response.json();
    if (!data.results || data.results.length === 0) {
      throw new Error("City not found");
    }
    return data.results[0];
  },

  async getWeather(lat, lon) {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`
    );
    if (!response.ok) {
      throw new Error("Weather request failed");
    }
    return response.json();
  },
  async Search(event) {
    event.preventDefault();
    const userCity = app.input.value.trim();
    if (!userCity) {
      app.output.innerHTML = `<p class="text-red-500">Please enter a city name.</p>`;
      return;
    }
    try {
      app.output.innerHTML = `<p>Loading weather...</p>`;
      const city = await app.getCity(userCity);
      const weatherData = await app.getWeather(city.latitude, city.longitude);
      const weather = weatherData.current_weather;
      app.output.innerHTML = `
        <div class="text-xl font-bold">
          ${city.name}
        </div>
        <div>
          Temperature: ${weather.temperature}C
        </div>
        <div class="text-gray-600">
          Wind Speed: ${weather.windspeed} km/h
        </div>
      `;
    } catch (error) {
      console.error(error);
      app.output.innerHTML = `<p class="text-red-500">City not found or API error.</p>`;
    }
  },
  go() {
    this.form.addEventListener("submit", this.Search);
  },
};
app.go();
