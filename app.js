// Sample weather data (normally fetched from an API)
const weatherData = [
    { date: '2024-07-25', temp: 72, condition: 'Clear' },
    { date: '2024-07-26', temp: 68, condition: 'Cloudy' },
    { date: '2024-07-27', temp: 75, condition: 'Sunny' },
    { date: '2024-07-28', temp: 70, condition: 'Rainy' },
    { date: '2024-07-29', temp: 74, condition: 'Clear' }
];

// Function to render the weather data
function renderWeatherData(data) {
    // Using map to create HTML elements for each weather item
    const weatherItems = data.map(day => (
        `<div class="weather-item">
            <h3>${day.date}</h3>
            <p>Temperature: ${day.temp}°F</p>
            <p>Condition: ${day.condition}</p>
        </div>`
    ));
    document.getElementById('weather-container').innerHTML = weatherItems.join('');
}

// Function to render sunny days
function renderSunnyDays(data) {
    // Using filter to find sunny days
    const sunnyDays = data.filter(day => day.condition === 'Sunny');
    
    // Using map to create HTML elements for sunny days
    const sunnyItems = sunnyDays.map(day => (
        `<div class="sunny-day">
            <h3>${day.date}</h3>
            <p>Temperature: ${day.temp}°F</p>
            <p>Condition: ${day.condition}</p>
        </div>`
    ));
    document.getElementById('sunny-container').innerHTML = sunnyItems.join('');
}

// Function to render the average temperature
function renderAverageTemperature(data) {
    // Using reduce to calculate the average temperature
    const totalTemp = data.reduce((acc, day) => acc + day.temp, 0);
    const averageTemp = totalTemp / data.length;
    
    // Display average temperature
    document.getElementById('average-temp').textContent = `Average Temperature: ${averageTemp.toFixed(1)}°F`;
}

// Function to log each day's weather info
function logWeatherData(data) {
    // Using forEach to log each day's weather
    data.forEach(day => {
        console.log(`Date: ${day.date}, Temperature: ${day.temp}°F, Condition: ${day.condition}`);
    });
}

// Render weather data on page load
document.addEventListener('DOMContentLoaded', () => {
    renderWeatherData(weatherData);
    renderSunnyDays(weatherData);
    renderAverageTemperature(weatherData);
    logWeatherData(weatherData);
});
