# 🌦️ Weather & News App

A React Native mobile application that displays **current weather** and **latest news headlines**, with dynamic **news filtering based on weather moods**. Users can customize their temperature unit and preferred news categories via the settings screen.

---

## 📱 Features

### ✅ Home Screen
- Shows current weather based on the user's location (using WeatherAPI).
- Displays temperature, weather condition, and a 3-day forecast.
- Fetches the latest news headlines based on user preferences (using NewsAPI).
- Filters news based on current weather:
  -  **Cold**: Shows depressing news.
  -  **Hot**: Shows fear-inducing news.
  -  **Cool**: Shows uplifting and happy news.# 🌦️ Weather & News App

A React Native mobile application that displays **current weather** and **latest news headlines**, with dynamic **news filtering based on weather moods**. Users can customize their temperature unit and preferred news categories via the settings screen.

---

##  Features

### ✅ Home Screen
- Shows current weather based on the user's location (via **Expo Location**).
- Displays temperature, weather condition, and a 3-day forecast.
- Fetches the latest news headlines based on user preferences (using **NewsAPI**).
- Filters news based on current weather:
  - 🧊 **Cold**: Shows depressing news.
  - 🔥 **Hot**: Shows fear-inducing news.
  - 🌤️ **Cool**: Shows uplifting and happy news.

### ✅ Settings Screen
- Choose temperature units: Celsius or Fahrenheit.
- Select preferred news categories (e.g., Business, Technology, Sports).
- Preferences are saved using **AsyncStorage** and persist between app sessions.

---

## 🔧 Tech Stack

- **React Native (Expo)**
- **WeatherAPI** – for real-time weather data
- **NewsAPI** – for latest news headlines
- **Expo Location** – to access user’s current location
- **AsyncStorage** – to persist user settings
- **React Navigation** – for screen navigation

---

## 🚀 Setup & Installation

### 1. Clone the Repository
git clone https://github.com/shreedhar7/WeatherApp
cd WeatherApp

2. Install Dependencies
npm install


4. Add Your API Keys
Create a file named .env (or insert directly in your code) and add:


WEATHER_API_KEY=your_weatherapi_key
NEWS_API_KEY=your_newsapi_key


4. Run the App
npx expo start


🌐 APIs Used
1. WeatherAPI
Endpoint: https://api.weatherapi.com/v1/forecast.json

Free signup: https://www.weatherapi.com

2. NewsAPI
Endpoint: https://newsapi.org/v2/top-headlines

Free signup: https://newsapi.org












