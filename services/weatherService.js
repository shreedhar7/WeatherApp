// services/weatherService.js
import axios from 'axios';

const WEATHER_API_KEY = '814d256b43084df198891650251905'; // replace with your key

export const fetchWeatherData = async (lat, lon) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${lat},${lon}&days=5`;
  const response = await axios.get(url);
  
  return response.data;
};
