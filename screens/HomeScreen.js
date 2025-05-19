import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Linking,
} from "react-native";
import * as Location from "expo-location";
import { fetchWeatherData } from "../services/weatherService";
import { fetchFilteredNews } from "../services/newsService";
import { SettingsContext } from "../context/SettingsContext";
import WeatherCard from "../components/WeatherCard";
import NewsCard from "../components/NewsCard";

const HomeScreen = () => {
  const [weather, setWeather] = useState(null);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { temperatureUnit, selectedCategories } = useContext(SettingsContext);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          alert("Permission to access location was denied");
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        const weatherData = await fetchWeatherData(
          location.coords.latitude,
          location.coords.longitude
        );
        setWeather(weatherData);

        const moodQuery = getMoodQuery(weatherData.current.temp_c);
        const categoryQuery =
          selectedCategories.length > 0 ? selectedCategories.join(" OR ") : "";
        const fullQuery = `${moodQuery}${
          categoryQuery ? " AND (" + categoryQuery + ")" : ""
        }`;

        const newsData = await fetchFilteredNews(fullQuery);
        setNews(newsData);

        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const getMoodQuery = (tempCelsius) => {
    if (tempCelsius <= 10) return "depression OR sadness OR crisis";
    if (tempCelsius >= 35) return "fear OR panic OR heat";
    return "happiness OR winning OR celebration";
  };

  const getMoodLabel = (tempCelsius) => {
    if (tempCelsius <= 10) return "😢 Sad Mood News";
    if (tempCelsius >= 35) return "🔥 Fear Mood News";
    return "🎉 Happy Mood News";
  };

  const getMoodStyle = (tempCelsius) => {
    if (tempCelsius <= 10) return { backgroundColor: "#b0c4de" };
    if (tempCelsius >= 35) return { backgroundColor: "#ffcccb" };
    return { backgroundColor: "#d0f0c0" };
  };

  const openArticle = (url) => {
    Linking.openURL(url);
  };

  if (loading || !weather) {
  return (
    <SafeAreaView style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#4682B4" />
      <Text style={styles.loadingText}>Fetching your personalized weather and news...</Text>
    </SafeAreaView>
  );
}


  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#4682B4" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Weather & News App</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Weather Card */}
        <WeatherCard weather={weather} temperatureUnit={temperatureUnit} />

        {/* News Mood & Cards */}
        <NewsCard
          weather={weather}
          news={news}
          getMoodLabel={getMoodLabel}
          getMoodStyle={getMoodStyle}
          openArticle={openArticle}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
 headerContainer: {
  backgroundColor: '#4682B4',
  paddingTop: 48,      // increase top padding to avoid notch overlap
  paddingBottom: 14,
  paddingHorizontal: 20,
  alignItems: 'center',

  elevation: 4,
},


headerText: {
  fontSize: 26,
  fontWeight: '300',   // lighter weight
  color: '#f0f8ff',    // a lighter off-white to soften contrast
  letterSpacing: 2,
  textTransform: 'uppercase', // uppercase for style
},
  scrollContainer: {
    padding: 10,
    paddingBottom: 60,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  card: {
    backgroundColor: "#f0f8ff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
  },
  cardTitle: {
    fontWeight: "600",
    marginBottom: 4,
  },
  moodTag: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  moodText: {
    fontWeight: "bold",
    color: "#333",
    fontSize: 14,
  },
  loadingContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#e6f0fa",
  padding: 20,
},

loadingText: {
  marginTop: 20,
  fontSize: 16,
  color: "#333",
  fontWeight: "500",
  textAlign: "center",
},

quoteText: {
  marginTop: 12,
  fontSize: 14,
  fontStyle: "italic",
  color: "#777",
  textAlign: "center",
  paddingHorizontal: 20,
},

});

export default HomeScreen;
