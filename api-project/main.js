const app = {
  cities: [
    { name: "new york", lat: 40.71, lon: -74.01 },
    { name: "london", lat: 51.51, lon: -0.13 },
    { name: "tokyo", lat: 35.68, lon: 139.69 },
    { name: "paris", lat: 48.85, lon: 2.35 },
  ],

  form: document.getElementById("weather-form"),
  input: document.getElementById("city-input"),
  output: document.getElementById("weather-output"),

  async getWeather(lat, lon) {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`
      );

      if (!response.ok) {
        throw new Error("API request failed");
      }
      const data = await response.json();
      const weather = data.current_weather;
      this.output.textContent =
        `Temperature: ${weather.temperature}C | ` +
        `Wind Speed: ${weather.windspeed} km/h`;
    } catch (error) {
      console.error(error);
      this.output.textContent =
        "Unable to load weather data. Please try again.";
    }
  },
  loadDefaultWeather() {
    const defaultCity = this.cities[0];
    this.getWeather(defaultCity.lat, defaultCity.lon);
  },

  Search(event) {
    event.preventDefault();
    const userCity = app.input.value.trim().toLowerCase();
    if (!userCity) {
      app.output.textContent = "Please enter a city name.";
      return;
    }
    const selectedCity = app.cities.find((city) => city.name === userCity);
    if (!selectedCity) {
      app.output.textContent = "City not found. Try New York or London.";
      return;
    }
    app.getWeather(selectedCity.lat, selectedCity.lon);
  },
  init() {
    this.loadDefaultWeather();
    this.form.addEventListener("submit", this.Search);
  },
};
app.init();
