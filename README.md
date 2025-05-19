# 🌦️ Weather & News App

A React Native mobile application that displays **current weather** and **latest news headlines**, with dynamic **news filtering based on weather moods**. Users can customize their temperature unit and preferred news categories via the settings screen.

---

## 📱 Features

### ✅ Home Screen
- Shows current weather based on the user's location (using WeatherAPI).
- Displays temperature, weather condition, and a 3-day forecast.
- Fetches the latest news headlines based on user preferences (using NewsAPI).
- Filters news based on current weather:
  - 🧊 **Cold**: Shows depressing news.
  - 🔥 **Hot**: Shows fear-inducing news.
  - 🌤️ **Cool**: Shows uplifting and happy news.

### ✅ Settings Screen
- Choose temperature units: Celsius or Fahrenheit.
- Select preferred news categories (e.g., Business, Technology, Sports).
- Preferences are saved using AsyncStorage and persist between app sessions.

---

## 🔧 Tech Stack

- **React Native** (Expo)
- **WeatherAPI** for weather data
- **NewsAPI** for news headlines
- **AsyncStorage** for persistent user preferences
- **React Navigation** for navigation

---

## 🚀 Setup & Installation

1. **Clone the repository**:
   
   git clone https://github.com/yourusername/weather-news-app.git
   cd weather-news-app
Install dependencies:


npm install
Add your API keys:

Create a file named .env or directly add keys in weatherService.js and newsService.js:


WEATHER_API_KEY=your_weatherapi_key
NEWS_API_KEY=your_newsapi_key
Run the app:


npx expo start
🌐 APIs Used
1. WeatherAPI
Endpoint: https://api.weatherapi.com/v1/forecast.json

Sign up: https://www.weatherapi.com

2. NewsAPI
Endpoint: https://newsapi.org/v2/top-headlines

Sign up: https://newsapi.org

Note: NewsAPI may restrict some features for free accounts (e.g., country-specific headlines).
