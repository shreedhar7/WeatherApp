import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';


const WeatherCard = ({ weather, temperatureUnit }) => {
  const temp =
    temperatureUnit === 'C' ? weather.current.temp_c : weather.current.temp_f;

  const unitSymbol = temperatureUnit === 'C' ? '°C' : '°F';

  return (
    <View style={styles.card}>
      
      <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1163/1163661.png' }} style={styles.defaultImage} />
      
      <Text style={styles.location2}>Current Location</Text>
      <Text style={styles.location}>{weather.location.name}</Text>

      <View style={styles.currentWeatherRow}>
        <View style={styles.tempCondition}>
          <Text style={styles.temp}>
            {temp}
            {unitSymbol}
          </Text>
          <Text style={styles.condition}>{weather.current.condition.text}</Text>
        </View>
      </View>

      
      <View style={styles.forecastSection}>
        <Text style={styles.forecastTitle}>5-Day Forecast</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.forecastScroll}
        >
          {weather.forecast.forecastday.map((item) => (
            <View key={item.date} style={styles.forecastCard}>
              <Text style={styles.forecastDate}>
                {new Date(item.date).toLocaleDateString(undefined, {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                })}
              </Text>
              <Text style={styles.forecastTemp}>
                {temperatureUnit === 'C'
                  ? `${item.day.avgtemp_c}°C`
                  : `${item.day.avgtemp_f}°F`}
              </Text>
              <Text style={styles.forecastCondition}>{item.day.condition.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#7DA7CA',
    borderRadius: 10,
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginBottom: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
  },
  defaultImage: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginBottom: 12,
    tintColor: 'white',
  },
  location: {
    fontSize: 28,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  location2 : {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
    marginBottom: 0,
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  currentWeatherRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  tempCondition: {
    justifyContent: 'center',
  },
  temp: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    textAlign: 'center',
  },
  condition: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    marginTop: 4,
    fontWeight: '600',
  },
  forecastSection: {
    width: '100%',
  },
  forecastTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: 'white',
    textAlign: 'center',
  },
  forecastScroll: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  forecastCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginRight: 15,
    width: 110,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  forecastDate: {
    fontWeight: '700',
    marginBottom: 8,
    color: 'white',
    textAlign: 'center',
  },
  forecastTemp: {
    fontWeight: '600',
    color: 'black',
    marginBottom: 4,
    textAlign: 'center',
  },
  forecastCondition: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
});

export default WeatherCard;
