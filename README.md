# summer-school-online-day-5
Chrome Extension that shows real-time weather using user's geolocation and WeatherAPI.
- Weather Chrome Extension – Summer School Day 5

This is a simple Chrome Extension I built as part of the Web Development Internship organized by Summer School IIT Jammu (Day 5). It shows live weather based on your current location using WeatherAPI.

-  What It Does
 Detects your location using the Geolocation API
 Gets weather data from WeatherAPI.com
 Shows:
 City name
 Current temperature in °C or °F
 Weather condition (like "Sunny", "Cloudy") with icon
Lets you switch between °C and °F
Saves the last weather result using localStorage
Shows a loading message while fetching
Handles cases where location is denied or API fails

-  Files in This Project
 `manifest.json` – Chrome extension setup (Manifest V3)
 `popup.html` – The popup layout
 `styles.css` – Styling for the popup
 `popup.js` – All the main JavaScript logic
 `icons/icon.png` – Custom icon used for the extension

- How to Try It
1. Download or clone this folder
2. Go to `chrome://extensions` in Chrome
3. Turn on **Developer Mode** (top right)
4. Click **Load Unpacked**
5. Select this project folder

## 🔗 Weather API Used
  (WeatherAPI.com)(https://www.weatherapi.com/) – free weather data source

This project is part of the Summer School Web Development Internship – IIT Jammu
