# 🌦️ Weather & News App

A React Native mobile application that displays **current weather** and **latest news headlines**, with dynamic **news filtering based on weather moods**. Users can customize their temperature unit and preferred news categories via the settings screen.

---


##  Features

### ✅ Home Screen
- Shows current weather based on the user's location (via **Expo Location**).
- Displays temperature, weather condition, and a 5-day forecast.
- Fetches the latest news headlines based on user preferences (using **NewsAPI**).
- Filters news based on current weather:
  -  **Cold**: Shows depressing news. (  if (tempCelsius <= 10) return "depression OR sadness OR crisis" )
  -  **Hot**: Shows fear-inducing news. ( if (tempCelsius >= 35) return "fear OR panic OR heat" )
  -  **Cool**: Shows uplifting and happy news. ( Either of that , then return " Happy Mood News" )

### ✅ Settings Screen
-  Allow users to select their preferred units for temperature
 (Celsius/Fahrenheit)
- Select preferred news categories (e.g., Business, Technology, Sports).


---

## 🔧 Tech Stack

<<<<<<< HEAD
<<<<<<< HEAD
- **React Native** (Expo)
- **WeatherAPI** for weather data
- **NewsAPI** for news headlines
- **AsyncStorage** for persistent user preferences
- **React Navigation** for navigation
=======
=======
>>>>>>> d6ae1c65914f5207d461c02afe493d1947bbf257
- **React Native (Expo)**
- **WeatherAPI** – for real-time weather data
- **NewsAPI** – for latest news headlines
- **Expo Location** – to access user’s current location
- **AsyncStorage** – to persist user settings
- **React Navigation** – for screen navigation
<<<<<<< HEAD
>>>>>>> d1cb281420e4adc6ce646e6ed0aee968b6827186
=======
>>>>>>> d6ae1c65914f5207d461c02afe493d1947bbf257

---

## 🚀 Setup & Installation

### 1. Clone the Repository
git clone https://github.com/shreedhar7/WeatherApp

cd WeatherApp

2. Install Dependencies : 
npm install


4. Add Your API Keys
Create a file named .env (or insert directly in your code) and add:


WEATHER_API_KEY=your_weatherapi_key
NEWS_API_KEY=your_newsapi_key


4. Run the App : 
npx expo start


🌐 APIs Used
1. WeatherAPI
Endpoint: https://api.weatherapi.com/v1/forecast.json

Free signup: https://www.weatherapi.com

2. NewsAPI
Endpoint: https://newsapi.org/v2/top-headlines

Free signup: https://newsapi.org


https://github.com/user-attachments/assets/5b23537a-7ca9-446b-a084-2443c977372d


<p align="center">
  <img src="https://github.com/user-attachments/assets/0587879c-627f-4b00-ac45-d4554386166e" width="300" />
  <img src="https://github.com/user-attachments/assets/4131903a-0a1d-4611-b5aa-8494f2ee889c" width="300" />
  <img src="https://github.com/user-attachments/assets/f276c55d-bda2-4d71-aa24-3e18215b0261" width="300" />
</p>












