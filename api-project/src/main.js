const cities = [
  { name: "new york", lat: 40.71, lon: -74.01 },
  { name: "los angeles", lat: 34.05, lon: -118.24 },
  { name: "chicago", lat: 41.88, lon: -87.63 },
  { name: "miami", lat: 25.76, lon: -80.19 },
  { name: "london", lat: 51.51, lon: -0.13 },
  { name: "paris", lat: 48.85, lon: 2.35 },
  { name: "tokyo", lat: 35.68, lon: 139.69 },
  { name: "sydney", lat: -33.87, lon: 151.21 },
  { name: "moscow", lat: 55.75, lon: 37.62 },
  { name: "rio de janeiro", lat: -22.91, lon: -43.17 },
  { name: "berlin", lat: 52.52, lon: 13.41 },
  { name: "dubai", lat: 25.2, lon: 55.27 },
  { name: "toronto", lat: 43.65, lon: -79.38 },
  { name: "beijing", lat: 39.9, lon: 116.4 },
  { name: "cape town", lat: -33.92, lon: 18.42 },
  { name: "san francisco", lat: 37.77, lon: -122.42 },
  { name: "seoul", lat: 37.57, lon: 126.98 },
  { name: "mumbai", lat: 19.07, lon: 72.88 },
  { name: "bangkok", lat: 13.75, lon: 100.5 },
  { name: "singapore", lat: 1.35, lon: 103.82 },
  { name: "mexico city", lat: 19.43, lon: -99.13 },
  { name: "los cabos", lat: 23.06, lon: -109.7 },
  { name: "barcelona", lat: 41.38, lon: 2.17 },
  { name: "amsterdam", lat: 52.37, lon: 4.9 },
  { name: "istanbul", lat: 41.01, lon: 28.97 },
  { name: "rome", lat: 41.9, lon: 12.49 },
  { name: "athens", lat: 37.98, lon: 23.72 },
  { name: "vancouver", lat: 49.28, lon: -123.12 },
  { name: "honolulu", lat: 21.31, lon: -157.86 },
];

const weatherOutput = document.getElementById("weather output");

async function getWeather(city) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Weather not available");
    }
    const data = await response.json();
    weatherOutput.textContent =
      `Temperature: ${data.weather.temperature} C |` +
      `Wind Speed: ${data.weather.windspeed} km/h`;
  } catch (error) {
    weatherOutput.textContent =
      "Could not load weather data. Please try again.";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  getWeather(cities[0]);
});
