async function getWeather() {
  const location = document.getElementById("locationInput").value;

  if (!location) {
    alert("Please enter a city name");
    return;
  }

  const apiKey = "2eaa22d9ef414b9db1260929262903";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      alert("City not found!");
      return;
    }

    document.getElementById("city").innerText = data.location.name + ", " + data.location.country;
    document.getElementById("temperature").innerText = "Temperature: " + data.current.temp_c + "°C";
    document.getElementById("condition").innerText = "Condition: " + data.current.condition.text;

  } catch (error) {
    console.error(error);
    alert("Error fetching weather data");
  }
}