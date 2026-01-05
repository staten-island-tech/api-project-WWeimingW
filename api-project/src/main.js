async function getData(poke) {
  try {
    const response = await fetch("https://api.weather.gov", {
      headers: {
        "User-Agent": "student-project",
      },
    });

    if (response.status != 200) {
      throw new Error(`HTTP error: ${response.status}`);
    } else {
      const data = await response.json();

      console.log({
        timestamp: new Date().toISOString(),
        endpoint: "https://api.weather.gov",
        status: response.status,
        success: true,
      });

      console.log(data);

      document.getElementById("api-response").textContent =
        "Weather API connected successfully";
    }
  } catch (error) {
    console.error({
      timestamp: new Date().toISOString(),
      endpoint: "https://api.weather.gov",
      success: false,
      error: error.message,
    });
  }
}

getData();
